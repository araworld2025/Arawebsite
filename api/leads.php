<?php
declare(strict_types=1);
require __DIR__ . '/bootstrap.php';

require_post();
$input = request_json();
if (!empty($input['website'])) json_response(200, ['ok' => true]);

$source = (string)($input['source'] ?? '');
if (!in_array($source, ['product-interest', 'newsletter-footer'], true)) {
    json_response(422, ['code' => 'invalid_source', 'message' => 'The signup source is invalid.']);
}

$email = normalize_email($input['email'] ?? '');
$tags = ['source:' . $source];
$customFields = ['source' => $source];

if ($source === 'product-interest') {
    $productId = clean_tag((string)($input['productId'] ?? ''));
    $intent = (string)($input['intent'] ?? '');
    $country = strtoupper(trim((string)($input['residenceCountry'] ?? '')));
    $language = trim((string)($input['desiredLanguage'] ?? ''));
    $otherLanguage = trim((string)($input['otherLanguage'] ?? ''));
    $age = trim((string)($input['childAgeRange'] ?? ''));
    if ($productId === '' || !in_array($intent, ['interest', 'restock'], true)) json_response(422, ['code' => 'invalid_product', 'message' => 'The product selection is invalid.']);
    if (!preg_match('/^[A-Z]{2}$/', $country)) json_response(422, ['code' => 'invalid_country', 'message' => 'Select a country of residence.']);
    if ($language === '' || ($language === 'Other' && $otherLanguage === '')) json_response(422, ['code' => 'invalid_language', 'message' => 'Select the language you want.']);
    if (!in_array($age, ['0–2', '3–5', '6–8', '9–12', '13+'], true)) json_response(422, ['code' => 'invalid_age', 'message' => 'Select a child age range.']);
    $tags[] = 'product:' . $productId;
    $tags[] = 'intent:' . $intent;
    $tags[] = 'language:' . clean_tag($language === 'Other' ? $otherLanguage : $language);
    $customFields += [
        'product_id' => $productId,
        'product_intent' => $intent,
        'residence_country' => $country,
        'desired_language' => $language === 'Other' ? $otherLanguage : $language,
        'child_age_range' => $age,
        'interested_at' => gmdate('c'),
    ];
}

if (!empty($input['newsletterConsent']) || $source === 'newsletter-footer') {
    $tags[] = 'newsletter:subscribed';
    $customFields['newsletter_consented_at'] = gmdate('c');
}

$result = reach_upsert(['email' => $email, 'tags' => array_values(array_unique($tags)), 'custom_fields' => $customFields]);
json_response(200, ['ok' => true, 'status' => 'pending_confirmation', 'contact' => $result['id'] ?? null]);
