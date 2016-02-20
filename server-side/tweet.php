<?php
require_once('TwitterAPIExchange.php');

$settings = array(
    'oauth_access_token' => "558781242-AWUMoimK6Ao921GLOaMdGaSMSk1tQwtrU2msvjB3",
    'oauth_access_token_secret' => "036hlZYnfzDEJUgGMjzzetvx4RaGvPioFxYs8EQr36RfE",
    'consumer_key' => "xkQhOk8uoZL8bDzaujfZiUqEC",
    'consumer_secret' => "PjXTXAUjJjCRoRINJtLUFFEOLW6woXarIvf2uYwruQgdu5uTLI"
);

$url = 'https://api.twitter.com/1.1/statuses/update.json';
$requestMethod = 'POST';

// receives $text via data

$numberOfTweets = ceil(strlen($text)/134);
if ($numberOfTweets < 10 && $numberOfTweets > 0) {
	for ($i = 0; $i < $numberOfTweets; $i++) { // "[1/2] " màx 1 dígit! (també per API)
		$tweet = '[' . $i + 1 . '/' . $numberOfTweets . '] ' . $text.substr($i * 140, 140);
		$postfields = array( 'status' => $tweet );
		$twitter = new TwitterAPIExchange($settings);
		echo $twitter->buildOauth($url, $requestMethod)
		    ->setPostfields($postfields)
		    ->performRequest();
	}
} else {
	echo "Don't push it!";
}
