function matchIndex(tweet){
	var r=new RegExp("\\d/\\d");
	return r.exec(tweet.text().substring(0,7));
}

function getTweetNumber(tweet){
	var r=new RegExp("^\\d");
	return r.exec(matchIndex(tweet));
}
