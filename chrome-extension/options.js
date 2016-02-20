
function save_options() {
	var _oauth_access_token = document.getElementById('oauth_access_token').value;
	var _oauth_access_token_secret = document.getElementById('oauth_access_token_secret').value;
	var _consumer_key = document.getElementById('consumer_key').value;
	var _consumer_secret = document.getElementById('consumer_secret').value;
	chrome.storage.sync.set({
		oauth_access_token: _oauth_access_token,
		oauth_access_token_secret: _oauth_access_token_secret,
		consumer_key : _consumer_key,
		consumer_secret : _consumer_secret
	}, function() {
		// Update status to let user know options were saved.
		var status = document.getElementById('status');
		status.textContent = 'Options saved.';
		setTimeout(function() {
			status.textContent = '';
		}, 750);
	});
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
	// Use default value color = 'red' and likesColor = true.
	chrome.storage.sync.get({
		oauth_access_token: "XXX",
		oauth_access_token_secret: "XXX",
		consumer_key : "XXX",
		consumer_secret : "XXX"
	}, function(items) {
		document.getElementById('oauth_access_token').value = items.oauth_access_token;
		document.getElementById('oauth_access_token_secret').value = items.oauth_access_token_secret;
		document.getElementById('consumer_key').value = items.consumer_key;
		document.getElementById('consumer_secret').value = items.consumer_secret;
	});
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
		save_options);
