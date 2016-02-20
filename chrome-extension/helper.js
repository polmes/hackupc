function matchIndex(tweet){
	var r = new RegExp("\\d/\\d");
	s=r.exec(tweet.text.substring(0,7));
	if(s !== null){
		return s[0];
	} else {
		return null;
}
}

function getTweetNumber(tweet){
	var r = new RegExp("^\\d");
	s = r.exec(matchIndex(tweet));
	if(s !== null){
		return s[0];
	} else {
		return null;
}

function getTotalTweets(tweet){
	var r = new RegExp("\\d$");
	if(s !== null){
		return s[0];
	} else {
		return null;
}

function removeIndex(tweet){
	var s=tweet.text.indexOf(matchIndex(tweet));
	var l=matchIndex(tweet).length;
	var t = tweet.text.substring(0,s)+tweet.text.substring(s+l);
	if(t[s-1]=='['||t[s-1]=='{'){
		t=t.substring(0,s-1)+t.substring(s+1);
		console.log("found!");
	}
	while(t[0]==" "){
		t=t.substring(1);
	}
	return t;
}

function mergeGroupTweets(group) {
	var tTweet = group.tweets[group.tweets.length - 1].html;
	for (var i = group.tweets.length - 2; i >= 0; i--) {
		tTweet.parent().append(group.tweets[i].html);
		group.tweets[i].css('display: none');
	}
	return tTweet;
}
