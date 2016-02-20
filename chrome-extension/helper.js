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
		console.log("found!");
	}
	while(t[0]==" "){
		t=t.substring(1);
	}
	tweet.text = t;
}

function mergeGroupTweets(group) {
	var finalTweet = group.tweets[group.tweets.length - 1].html;
	for (var i = group.tweets.length - 2; i >= 0; i--) {
		finalTweet.parent().append(group.tweets[i].html.clone());
		group.tweets[i].dom.addClass('animated zoomOutRight');
		group.tweets[i].dom.delay(1500).css('display', 'none');
	}
	return finalTweet;
}
