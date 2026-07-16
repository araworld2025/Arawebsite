<?php
declare(strict_types=1);
require __DIR__ . '/bootstrap.php';

require_post();
$secret = env_required('PAYMENT_WEBHOOK_SECRET');
$raw = file_get_contents('php://input') ?: '';
$signature = strtolower(trim($_SERVER['HTTP_X_ARA_SIGNATURE'] ?? ''));
$expected = hash_hmac('sha256', $raw, $secret);
if ($signature === '' || !hash_equals($expected, $signature)) json_response(401, ['code' => 'invalid_signature', 'message' => 'Invalid webhook signature.']);
$event = json_decode($raw, true);
if (!is_array($event)) json_response(400, ['code' => 'invalid_json', 'message' => 'Invalid event body.']);

$eventId = trim((string)($event['eventId'] ?? ''));
$type = (string)($event['type'] ?? '');
$order = $event['order'] ?? null;
if ($eventId === '' || !is_array($order)) json_response(422, ['code' => 'invalid_event', 'message' => 'Missing event or order data.']);
$allowed = ['order.paid', 'order.cancelled', 'order.refunded'];
if (!in_array($type, $allowed, true)) json_response(200, ['ok' => true, 'ignored' => true]);

$email = normalize_email($order['email'] ?? '');
$productId = clean_tag((string)($order['productId'] ?? ''));
$orderId = trim((string)($order['orderId'] ?? ''));
if ($productId === '' || $orderId === '') json_response(422, ['code' => 'invalid_order', 'message' => 'Missing order identifiers.']);

$status = match ($type) { 'order.paid' => 'paid', 'order.cancelled' => 'cancelled', 'order.refunded' => 'refunded' };
$tags = ['product:' . $productId, 'order-status:' . $status];
if ($status === 'paid') { $tags[] = 'customer:yes'; $tags[] = 'intent:preordered'; }
$timestampField = match ($status) { 'paid' => 'preordered_at', 'cancelled' => 'cancelled_at', 'refunded' => 'refunded_at' };

reach_upsert([
    'email' => $email,
    'tags' => $tags,
    'custom_fields' => [
        'last_order_id' => $orderId,
        'last_order_status' => $status,
        $timestampField => gmdate('c'),
        'last_payment_event_id' => $eventId,
    ],
]);
json_response(200, ['ok' => true]);
