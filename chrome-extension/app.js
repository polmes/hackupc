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
console.log=console.__proto__.log;

/*var target = document.getElementById("stream-items-id");
var config = {subtree:true,childList:true,attributes:true,characterData:true}
var observer = new MutationObserver(function(mutations){makeTweets();makeGroups();console.log("update")});
observer.observe(target,config);*/

var target = document.getElementById("stream-items-id");
jQuery("body").bind("DOMSubtreeModified",function(){makeTweets();makeGroups();console.log("update")})



