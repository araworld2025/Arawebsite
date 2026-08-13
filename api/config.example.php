<?php
// Copy this file to /home/u589531741/domains/ara.kids/ara-config.php.
// That location is outside public_html and must never be committed.
return [
    // Publish both Google Forms before copying their formResponse URLs and entry IDs here.
    'GOOGLE_PREORDER_FORM_URL' => 'https://docs.google.com/forms/d/e/replace-with-form-id/formResponse',
    'GOOGLE_PREORDER_EMAIL_FIELD' => 'entry.1000000001',
    'GOOGLE_PREORDER_COUNTRY_FIELD' => 'entry.1000000002',
    'GOOGLE_PREORDER_LANGUAGE_FIELD' => 'entry.1000000003',
    'GOOGLE_PREORDER_OTHER_LANGUAGE_FIELD' => 'entry.1000000004',
    'GOOGLE_PREORDER_AGE_FIELD' => 'entry.1000000005',
    'GOOGLE_PREORDER_NEWSLETTER_CONSENT_FIELD' => 'entry.1000000006',
    'GOOGLE_NEWSLETTER_FORM_URL' => 'https://docs.google.com/forms/d/e/replace-with-form-id/formResponse',
    'GOOGLE_NEWSLETTER_EMAIL_FIELD' => 'entry.2000000001',

    // These remain dormant until Reach and checkout are enabled.
    'REACH_API_TOKEN' => 'replace-with-hostinger-reach-token',
    'REACH_CONTACTS_URL' => 'https://developers.hostinger.com/api/reach/v1/contacts',
    'PAYMENT_WEBHOOK_SECRET' => 'replace-after-selecting-a-checkout-provider',
];
