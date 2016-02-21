
var accesor = {
	consumerKey = "0ZW9TIbcgC8xLbxE0zsF28pqw",
	consumerSecret = "MPD6Ws5H2Vvee9wfodmqb41grVuHoGrnrUq8Hj1IPT7cfyoyCK"
};

var message = {
	action: "https://api.twitter.com/oauth/request_token",
	method: "POST",
	parameters: []
};

message.parameters.push(['realm', "https://api.twitter.com/oauth/request_token"],
						['oauth_nonce',"K7ny27JTpKVsTgdyLdDfmQQWVLERj2zAK5BslRsqsa_ "],
						['oauth_callback',"http://www.twitter.com"],
						['oauth_signature_method',"HMAC-SHA1"],
						['oauth_timestamp',Date.now() / 1000 | 0],
						['oauth_consumer_key',"0ZW9TIbcgC8xLbxE0zsF28pqw"],
						['oauth_version',"2.0"],
						['oauth_signature',""]);

OAuth.sign(message);
OAuth.completeRequest(message,accesor);

var parameterMap = OAuth.getParameterMap(message.parameters);
var murl = https://api.twitter.com/oauth/request_token;

if (parameterMap instanceof Array)
{
	for (var i = 0; i < parameterMap.length; ++i)
	{
		murl = murl + '&' + parameterMap[i][0] + '=' + parameterMap[i][1];
	}
}

jQuery.ajax({
	url:murl,
	datatype:"jsonp",
	type:"POST"});
