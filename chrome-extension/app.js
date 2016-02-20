var tweets = jQuery('[data-item-type="tweet"]');
tweets.each(function(index) {
	if (tweet.find('.TweetTextSize').text().indexOf('1/') > -1) {
		tweet.find('.TweetTextSize').append('THIS MIGHT WORK');
	}
});
