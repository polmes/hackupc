<?php
header('Access-Control-Allow-Origin: *'); // for chrome

if (isset($_POST['action']) && !empty($_POST['action'])) {
	$action = $_POST['action'];
	if ($action == 'tweet') {
		require_once('TwitterAPIExchange.php');

		if (!empty($_POST['options'])) $options = $_POST['options'];
        else die("Hmmm... that's weird");

        $settings = array(
            'oauth_access_token' => $options['oauth_access_token'],
            'oauth_access_token_secret' => $options['oauth_access_token_secret'],
            'consumer_key' => $options['consumer_key'],
            'consumer_secret' => $options['consumer_secret']
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
				// echo $tweet;
				$postfields = array( 'status' => $tweet );
				$twitter = new TwitterAPIExchange($settings);
				$twitter->buildOauth($url, $requestMethod)
					   	->setPostfields($postfields)
						->performRequest();
			}
		} else {
			echo "Don't push it!";
		}
	} else if ($action == 'test') {
		echo "Alright!";
		// var_dump($_POST['options']);
	}
} else {
	echo "Bad luck";
}
