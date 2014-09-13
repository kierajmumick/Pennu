var Twilio = require('twilio');
var express = require('express');
var app = express();
var server = require('http').createServer(app);

var bodyParser = require('body-parser');

app.use(bodyParser());

app.post('/', function(request, response) {

	var diningHall = request.body.Body;
	var resp = new Twilio.TwimlResponse();
	var date = new Date();
	var dateString = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
	switch (diningHall.toLowerCase()) {
		case "hill":
			resp.message("Hill's menu for " + dateString);
			break;
		case "commons":
			resp.message("This is Commons's menu" + dateString);
			break;
		case "kc":
			resp.message("This is Kings Court's menu" + dateString);
			break;
		case "kings court":
			resp.message("This is Kings Court's menu" + dateString);
		case "hours":
			resp.message("These are the hours for each dining hall today");
			break;
		default:
			resp.message("Invalid! For Menus, reply with \"Hill\", \"Commons\", or \"KC\". For Hours, reply with \"Hours\"");
			break;
	}

	response.writeHead(200, {'Content-type': 'text/xml'});

	response.end(resp.toString());
})

app.listen(1337);

console.log('Visit http://localhost:1337/ in your browser to see your TwiML document!');
