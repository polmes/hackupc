<?php
require_once('TwitterAPIExchange.php');

/*$settings = array(
    'oauth_access_token' => "558781242-AWUMoimK6Ao921GLOaMdGaSMSk1tQwtrU2msvjB3",
    'oauth_access_token_secret' => "036hlZYnfzDEJUgGMjzzetvx4RaGvPioFxYs8EQr36RfE",
    'consumer_key' => "xkQhOk8uoZL8bDzaujfZiUqEC",
    'consumer_secret' => "PjXTXAUjJjCRoRINJtLUFFEOLW6woXarIvf2uYwruQgdu5uTLI"
);*/

$url = 'https://api.twitter.com/oauth/request_token';
// $requestMethod = 'POST';
$postfields = array( 'oauth_callback' => 'https://twitter.com/' );

$twitter = new TwitterAPIExchange($settings);
echo $twitter->setPostfields($postfields)
    ->performRequest();
