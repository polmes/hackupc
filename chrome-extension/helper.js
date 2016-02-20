function matchIndex(tweet){
	var r = new RegExp("\\d/\\d");
	return r.exec(tweet.text().substring(0,7));
}

function getTweetNumber(tweet){
	var r = new RegExp("^\\d");
	return r.exec(matchIndex(tweet));
}

function getTotalTweets(tweet){
	var r = new RegExp("\\d$");
	return r.exec(matchIndex(tweet));
}

function removeIndex(tweet){
	return tweet.text.substring(0,tweet.text.indexOf(matchIndex(tweet)))+tweet.text.substring(tweet.text.indexOf(matchIndex(tweet))+matchIndex(tweet).length,20)
}
