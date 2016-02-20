function matchIndex(tweet){
	var r = new RegExp("\\d/\\d");
	return r.exec(tweet.text.substring(0,7))[0];
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
