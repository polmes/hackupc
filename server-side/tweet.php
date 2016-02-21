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
$text = "Here's to beta testing a Twitter application that lets you completely ignore whast some would consider to be ridiculous limitations by today standards, but that are actually what make Twitter twttr, and not just another Facebook";

$numberOfTweets = ceil(strlen($text)/134);
if ($numberOfTweets < 10 && $numberOfTweets > 0) {
	for ($i = 0; $i < $numberOfTweets; $i++) { // "[1/2] " màx 1 dígit! (també per API)
		$tweet = '[' . ($i + 1) . '/' . $numberOfTweets . '] ' . substr($text, $i * 134, 134);
		echo $tweet;
		$postfields = array( 'status' => $tweet );
		$twitter = new TwitterAPIExchange($settings);
		echo $twitter->buildOauth($url, $requestMethod)
			->setPostfields($postfields)
			->performRequest();
	}
} else {
	echo "Don't push it!";
}
