<?php
declare(strict_types=1);

function json_response(int $status, array $body): never {
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    echo json_encode($body, JSON_UNESCAPED_SLASHES);
    exit;
}

function require_post(): void {
    if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
        header('Allow: POST');
        json_response(405, ['code' => 'method_not_allowed', 'message' => 'POST is required.']);
    }
}

function request_json(): array {
    $raw = file_get_contents('php://input');
    $data = json_decode($raw ?: '', true);
    if (!is_array($data)) json_response(400, ['code' => 'invalid_json', 'message' => 'A valid JSON body is required.']);
    return $data;
}

function env_required(string $name): string {
    $value = getenv($name);
    if ($value === false || trim($value) === '') {
        error_log("Missing required environment variable: {$name}");
        json_response(503, ['code' => 'service_unconfigured', 'message' => 'Signup is temporarily unavailable.']);
    }
    return trim($value);
}

function normalize_email(mixed $value): string {
    $email = strtolower(trim((string)$value));
    if (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 254) {
        json_response(422, ['code' => 'invalid_email', 'message' => 'Enter a valid email address.']);
    }
    return $email;
}

function reach_upsert(array $contact): array {
    $token = env_required('REACH_API_TOKEN');
    $url = getenv('REACH_CONTACTS_URL') ?: 'https://developers.hostinger.com/api/reach/v1/contacts';
    $reachPayload = [
        'email' => $contact['email'],
        'name' => '',
        'surname' => '',
        'phone' => '',
        'note' => json_encode([
            'ara_tags' => $contact['tags'] ?? [],
            'ara_fields' => $contact['custom_fields'] ?? [],
        ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
    ];
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 15,
        CURLOPT_HTTPHEADER => ['Authorization: Bearer ' . $token, 'Content-Type: application/json', 'Accept: application/json'],
        CURLOPT_POSTFIELDS => json_encode($reachPayload, JSON_UNESCAPED_SLASHES),
    ]);
    $body = curl_exec($ch);
    $status = (int)curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
    $error = curl_error($ch);
    curl_close($ch);
    if ($body === false || $status < 200 || $status >= 300) {
        error_log('Reach request failed: status=' . $status . ' error=' . $error . ' response=' . substr((string)$body, 0, 500));
        json_response(502, ['code' => 'provider_error', 'message' => 'We could not save your details. Please try again.']);
    }
    $decoded = json_decode((string)$body, true);
    return is_array($decoded) ? $decoded : [];
}

function clean_tag(string $tag): string {
    return strtolower(preg_replace('/[^a-z0-9:_-]+/i', '-', trim($tag)) ?? '');
}
