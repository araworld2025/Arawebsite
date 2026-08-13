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
    $resolvedLanguage = $language === 'Other' ? $otherLanguage : $language;
    google_forms_submit(google_form_endpoint('GOOGLE_PREORDER_FORM_URL'), [
        google_form_entry('GOOGLE_PREORDER_EMAIL_FIELD') => $email,
        google_form_entry('GOOGLE_PREORDER_COUNTRY_FIELD') => $country,
        google_form_entry('GOOGLE_PREORDER_LANGUAGE_FIELD') => $resolvedLanguage,
        google_form_entry('GOOGLE_PREORDER_OTHER_LANGUAGE_FIELD') => $otherLanguage,
        google_form_entry('GOOGLE_PREORDER_AGE_FIELD') => $age,
        google_form_entry('GOOGLE_PREORDER_NEWSLETTER_CONSENT_FIELD') => !empty($input['newsletterConsent']) ? 'Yes' : 'No',
    ]);
    json_response(200, [
        'ok' => true,
        'status' => 'recorded',
        'productId' => $productId,
        'intent' => $intent,
    ]);
}

google_forms_submit(google_form_endpoint('GOOGLE_NEWSLETTER_FORM_URL'), [
    google_form_entry('GOOGLE_NEWSLETTER_EMAIL_FIELD') => $email,
]);
json_response(200, ['ok' => true, 'status' => 'recorded']);
