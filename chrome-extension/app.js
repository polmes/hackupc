// var tweets = jQuery('[data-item-type="tweet"]');

/*tweets.each(function(index) {
	if (tweets.eq(index).find('.tweet-text').text().indexOf('1/') > -1) {
		tweets.eq(index).find('.tweet-text').append('THIS MIGHT WORK');
	}
});*/

/*function getTweetText(tweet) {
	tweet.find('.tweet-text').text();
}*/

/*function getUserName(tweet) {
	tweet.
}*/

var Tweet = function(tweet) {
	// this.text = tweet.find('.tweet-text').text();
	this.html = tweet.find('.tweet-text');
	this.text = this.html.text();
	this.user = tweet.children().data('screen-name');
	this.dom = tweet;
	this.tweetNumber = getTweetNumber(this);
};

var Group = function(start, totalTweets) {
	this.realUser = tweets[start].user;
	var count = 0;
	this.tweets = [];
	for (var i = start; count < totalTweets; i++) { // begin at start to include first
		if (tweets[i].user === this.realUser) {
			this.tweets.push(tweets[i]);
			count++;
		}
		// NEEDS ERROR HANDLING
	}
	this.finalTweet = mergeGroupTweets(this); // whatever
};

var tweets = [], groups = [];

function makeTweets() {
	jQuery('[data-item-type="tweet"]').each(function(i) {
		tweets[i] = new Tweet(jQuery('[data-item-type="tweet"]').eq(i));
		if (typeof matchIndex(tweets[i]) === "string") {
			groups.push(new Group(i, tweets[i].tweetNumber));
		}
	});
}

// var tweet = new Tweet(jQuery('[data-item-type="tweet"]').eq(0))
