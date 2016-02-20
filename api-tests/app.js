var tweets = jQuery('[data-item-type="tweet"]');
tweets.each(function(index) {
	if (tweets.eq(index).find('.tweet-text').text().indexOf('1/') > -1) {
		tweets.eq(index).find('.tweet-text').append('THIS MIGHT WORK');
	}
});
