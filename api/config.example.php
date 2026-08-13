<?php
// Copy this file to /home/u589531741/domains/ara.kids/ara-config.php.
// That location is outside public_html and must never be committed.
return [
    // Publish both Google Forms before copying their formResponse URLs and entry IDs here.
    'GOOGLE_PREORDER_FORM_URL' => 'https://docs.google.com/forms/d/e/1FAIpQLSf5juZWdaQeQbp14hI_b3KF15-jPFcJKj5HUbjNgJBdJWf_KQ/formResponse',
    'GOOGLE_PREORDER_EMAIL_FIELD' => 'entry.2144448539',
    'GOOGLE_PREORDER_COUNTRY_FIELD' => 'entry.157499536',
    'GOOGLE_PREORDER_LANGUAGE_FIELD' => 'entry.936701286',
    'GOOGLE_PREORDER_OTHER_LANGUAGE_FIELD' => 'entry.419324638',
    'GOOGLE_PREORDER_AGE_FIELD' => 'entry.1318080131',
    'GOOGLE_PREORDER_NEWSLETTER_CONSENT_FIELD' => 'entry.491249159',
    'GOOGLE_NEWSLETTER_FORM_URL' => 'https://docs.google.com/forms/d/e/1FAIpQLSedXeyhwyNs_gSWUki-xTz_lin-51AkiKXYN4fasNod3dnRlg/formResponse',
    'GOOGLE_NEWSLETTER_EMAIL_FIELD' => 'entry.757530065',

    // These remain dormant until Reach and checkout are enabled.
    'REACH_API_TOKEN' => 'replace-with-hostinger-reach-token',
    'REACH_CONTACTS_URL' => 'https://developers.hostinger.com/api/reach/v1/contacts',
    'PAYMENT_WEBHOOK_SECRET' => 'replace-after-selecting-a-checkout-provider',
];
