// load the twilio module
var Twilio = require('twilio');

// create the client
var client = new Twilio.RestClient('AC46a3eb202615d7cd8d25b0a0b2666661',
								   'ca76d72cb8c5c0a390d821a0d2619654');


client.sendSms({
	to: '+19085283378',
	from: '+17817867584',
	body: 'This is a test for twilio and node.js, from Kieraj'
}, function(error, message) {
	if (!error) {
		console.log('Message sent');
	} else {
		console.log(error);
	}
});