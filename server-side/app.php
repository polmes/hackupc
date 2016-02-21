<?php
header('Access-Control-Allow-Origin: *');

if (isset($_POST['action']) && !empty($_POST['action'])) {
	$action = $_POST['action'];
	if ($action == 'tweet') {
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
		if (!empty($_POST['text'])) $text = $_POST['text'];
		else die("Hmmm... that's weird");

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
	}
} else {
	echo "Bad luck";
}
