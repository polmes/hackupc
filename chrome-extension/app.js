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
	this.dom = tweet;
	this.html = this.dom.find('.tweet-text');
	this.text = this.html.text();
	this.user = this.dom.children().data('screen-name');
	this.tweetNumber = getTweetNumber(this);

	this.update = function() {
		this.html.text(this.text);
		this.dom.find('.tweet-text')[0] = this.html;
	};
};

var Group = function(start, totalTweets) {
	this.realUser = tweets[start].user;
	var count = 0;
	this.tweets = [];
	for (var i = start; count < totalTweets; i++) { // begin at start to include first
		if (tweets[i].user === this.realUser) {
			removeIndex(tweets[i]);
			this.tweets.push(tweets[i]);
			count++;
		}
		// NEEDS ERROR HANDLING
	}
	this.finalTweet = mergeGroupTweets(this);
};

var tweets = [], groups = [];

function makeTweets() {
	jQuery('[data-item-type="tweet"]').each(function(i) {
		tweets[i] = new Tweet(jQuery('[data-item-type="tweet"]').eq(i));
	});
}

/*function makeGroups() {
	var i = 0;
	while (i < tweets.length) {
		if (typeof matchIndex(tweets[i]) === "string") {
			groups.push(new Group(i, tweets[i].tweetNumber));
			i += groups[groups.length - 1].tweets.length - 1;
		}
	}
}*/

function makeGroups() {
	for (var i = 0; i < tweets.length; i++) {
		if (lastTweet(tweets[i])) {
			groups.push(new Group(i, tweets[i].tweetNumber));
			// AND MORE ERROR HANDLING
		}
	} 
}

// var tweet = new Tweet(jQuery('[data-item-type="tweet"]').eq(0))

makeTweets();
// setTimeout(makeGroups, 2500);
makeGroups();

/*function toServer() {
	jQuery.ajax({
		type: 'POST',
		url: 'http://ec2-52-28-157-47.eu-central-1.compute.amazonaws.com/more_than_140/ajax.php', // permissions?
		crossDomain: true,
		data: {
			action: 'tweet' // here comes multiple 140char tweets text
		},
		success: function(response) {
			jQuery('body').append('<h1>' + response + '</h1>');
		}
	});
}
toServer();*/

/*chrome.storage.sync.get(function(items) {
	console.log(items);
});*/
