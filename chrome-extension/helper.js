function matchIndex(tweet){
	var r = new RegExp("\\d+/\\d+");
	s=r.exec(tweet.text.substring(0,7));
	if(s !== null){
		return s[0];
	} else {
		return null;
	}
}

function getTweetNumber(tweet){
	var r = new RegExp("^\\d+");
	s = r.exec(matchIndex(tweet));
	if(s !== null){
		return s[0];
	} else {
		return null;
	}
}

function getTotalTweets(tweet){
	var r = new RegExp("\\d+$");
	s = r.exec(matchIndex(tweet));
	if(s !== null){
		return s[0];
	} else {
		return null;
	}
}

function lastTweet(tweet){
	if((T=getTotalTweets(tweet))!==null){
		return T==getTweetNumber(tweet);
	} else {
		return false;
	}
}

function removeIndex(tweet){
	var s=tweet.text.indexOf(matchIndex(tweet));
	var l=matchIndex(tweet).length;
	var t = tweet.text.substring(0,s)+tweet.text.substring(s+l);
	if(t[s-1]=='['||t[s-1]=='{'||t[s-1]=='('){
		t=t.substring(0,s-1)+t.substring(s+1);
	}
	while(t[0]==" "){
		t=t.substring(1);
	}
	tweet.text = t;
	tweet.update();
	return tweet;
}

function mergeGroupTweets(group) {
	var finalTweet = group.tweets[group.tweets.length - 1].html;
	for (var i = group.tweets.length - 2; i >= 0; i--) {
		finalTweet.parent().append(group.tweets[i].html.clone());
		group.tweets[i].dom.css('display', 'none');
	}
	jQuery(finalTweet).parent().find(".TweetTextSize--26px").addClass("TweetTextSize--16px");
	jQuery(finalTweet).parent().find(".TweetTextSize--26px").removeClass("TweetTextSize--26px");
	return finalTweet;
}


function mergeTimestamps(group) {
	var finalTimestamp = group.tweets[group.tweets.length - 1].timestamp;
	finalTimestamp.find(".tweet-timestamp").eq(0).append(" ["+1+"/"+group.tweets.length+"] ");
	for (var i = group.tweets.length - 2; i >= 0; i--) {
		finalTimestamp.append(group.tweets[i].timestamp.find(".tweet-timestamp").clone());
		finalTimestamp.find(".tweet-timestamp").eq(group.tweets.length-i-1).append(" ["+(group.tweets.length-i)+"/"+(group.tweets.length)+"] ");
	}
	return finalTimestamp;
}

function getTokens() {
	chrome.storage.sync.get(function(items) {
		return items;
	});
}
