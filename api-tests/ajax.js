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
