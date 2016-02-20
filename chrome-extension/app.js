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
	this.text = tweet.find('.tweet-text').text();
	this.user = tweet.children().data('screen-name');
	this.dom = tweet;
	this.tweetNumber = getTweetNumber(tweet);
};

var tweets;

function makeTweets() {
	tweets.each(function(i) {
		tweets[i] = new Tweet(jQuery('[data-item-type="tweet"]').eq(i));
	});
}

var Group = function(start, totalTweets) {
	this.realUser = tweets[start].user;
	var count = 0;
	for (var i = start + 1; count < totalTweets; i++) {
		if (tweets[i].user === realUser) {
			this.tweets.push(tweets[i]);
			count++;
		}
		// NEEDS ERROR HANDLING
	}
}
