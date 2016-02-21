var Tweet = function(tweet) {
	this.dom = tweet;
	this.html = this.dom.find('.tweet-text');
	this.text = this.html.text();
	this.timestamp = this.dom.find('.time');
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
	this.finalTimestamp = mergeTimestamps(this);
};

var tweets = [], groups = [];

function makeTweets() {
	jQuery('[data-item-type="tweet"]').each(function(i) {
		tweets[i] = new Tweet(jQuery('[data-item-type="tweet"]').eq(i));
	});
}

function makeGroups() {
	groups = [];
	for (var i = 0; i < tweets.length; i++) {
		if (lastTweet(tweets[i])) {
			groups.push(new Group(i, tweets[i].tweetNumber));
			// AND MORE ERROR HANDLING
		}
	}
}


makeTweets();
// setTimeout(makeGroups, 2500);
makeGroups();

jQuery('.alert-messages').remove();
console.log=console.__proto__.log;

function f(){makeTweets();makeGroups();};
f();
setInterval(f,3000);

function isTooLong() {
	if (jQuery('.tweet-counter').text() < 0) return true;
	else return false;
}

if (isTooLong()) {
	jQuery('.tweet-btn').removeAttr('disabled');
	jQuery('.tweet-btn').removeClass('disabled');
}

// Necessary to change Chrome's security permissions
jQuery.ajax({
	type: 'POST',
	url: 'http://ec2-52-28-157-47.eu-central-1.compute.amazonaws.com/more_than_140/app.php',
	crossDomain: true,
	data: {
		action: 'test'
	},
	success: function(response) {
		console.log(response);
	}
});

jQuery('.tweet-btn').click(function() {
	if (isTooLong()) {
		jQuery.ajax({
			type: 'POST',
			url: 'http://ec2-52-28-157-47.eu-central-1.compute.amazonaws.com/more_than_140/app.php',
			crossDomain: true,
			data: {
				action: 'tweet',
				text: jQuery('[name="tweet"]').find('div').text()
			},
			success: function(response) {
				jQuery('body').prepend(response);
				jQuery('[name="tweet"]').find('div').text('');
			}
		});
	}
});
