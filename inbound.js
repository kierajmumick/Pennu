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
			resp.message(diningHoursByDate());
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


function diningHoursByDate() {

    var n = new Date().getDay();
    if(n===0){ //Sunday
        return "Today is Sunday. \n 1920 COMMONS \n Brunch: 11 am - 3 pm \n Dinner: 5 pm - 8 pm \n HILL \n Brunch: " + "11 am - 3 pm" + "\n" + "Dinner: " + "5 pm - 8 pm" + "\n" + "Express: " + "8 pm - 12 am" +
        "\n" + "KINGS COURT" + "\n" + "Closed on weekends."; //Sunday is good
    }
    else if(n==1){ //Monday
        return "Today is Monday." + "\n" +
        "1920 COMMONS" + "\n" + "Lunch: " + "11 am - 2 pm" + "\n" + "Dinner: " + "5 pm - 9 pm" +
        "\n" + "HILL" + "\n" + "Breakfast: " + "7:30 am - 10 am" + "\n" + "Light Breakfast: " + "10 am - 11 am" + "\n" + "Lunch: " + "11 am - 2 pm" + "\n" + "Light Lunch: " + "2 pm - 5 pm" + "\n" + "Dinner: " + "5 pm - 8 pm" + "\n" + "Express: " + "8 pm - 12 am" + 
        "\n" + "KINGS COURT" + "\n" + "Breakfast: " + "8:30 am - 10:30 am" + "\n" + "Lunch: " + "11 am - 2 pm" + "\n" + "Dinner: " + "5 pm - 8 pm"; //Mon - Thurs good
    }
    else if (n==2){ //Tuesday
        return "Today is Tuesday." + "\n" +
        "1920 COMMONS" + "\n" + "Lunch: " + "11 am - 2 pm" + "\n" + "Dinner: " + "5 pm - 9 pm" +
        "\n" + "HILL" + "\n" + "Breakfast: " + "7:30 am - 10 am" + "\n" + "Light Breakfast: " + "10 am - 11 am" + "\n" + "Lunch: " + "11 am - 2 pm" + "\n" + "Light Lunch: " + "2 pm - 5 pm" + "\n" + "Dinner: " + "5 pm - 8 pm" + "\n" + "Express: " + "8 pm - 12 am" + 
        "\n" + "KINGS COURT" + "\n" + "Breakfast: " + "8:30 am - 10:30 am" + "\n" + "Lunch: " + "11 am - 2 pm" + "\n" + "Dinner: " + "5 pm - 8 pm"; //Mon - Thurs good
    }
    else if (n==3){ //Wednesday
        return "Today is Wednesday." + "\n" +
        "1920 COMMONS" + "\n" + "Lunch: " + "11 am - 2 pm" + "\n" + "Dinner: " + "5 pm - 9 pm" +
        "\n" + "HILL" + "\n" + "Breakfast: " + "7:30 am - 10 am" + "\n" + "Light Breakfast: " + "10 am - 11 am" + "\n" + "Lunch: " + "11 am - 2 pm" + "\n" + "Light Lunch: " + "2 pm - 5 pm" + "\n" + "Dinner: " + "5 pm - 8 pm" + "\n" + "Express: " + "8 pm - 12 am" + 
        "\n" + "KINGS COURT" + "\n" + "Breakfast: " + "8:30 am - 10:30 am" + "\n" + "Lunch: " + "11 am - 2 pm" + "\n" + "Dinner: " + "5 pm - 8 pm"; //Mon - Thurs good
    }
    else if (n==4){ //Thursday
        return "Today is Thursday." + "\n" +
        "1920 COMMONS" + "\n" + "Lunch: " + "11 am - 2 pm" + "\n" + "Dinner: " + "5 pm - 9 pm" +
        "\n" + "HILL" + "\n" + "Breakfast: " + "7:30 am - 10 am" + "\n" + "Light Breakfast: " + "10 am - 11 am" + "\n" + "Lunch: " + "11 am - 2 pm" + "\n" + "Light Lunch: " + "2 pm - 5 pm" + "\n" + "Dinner: " + "5 pm - 8 pm" + "\n" + "Express: " + "8 pm - 12 am" + 
        "\n" + "KINGS COURT" + "\n" + "Breakfast: " + "8:30 am - 10:30 am" + "\n" + "Lunch: " + "11 am - 2 pm" + "\n" + "Dinner: " + "5 pm - 8 pm"; //Mon - Thurs good
    }
    else if(n==5){ //Friday
        return "Today is Friday." + "\n" +
        "1920 COMMONS" + "\n" + "Lunch: " + "11 am - 2 pm" + "\n" + "Dinner: " + "5 pm - 7:30 pm" +
        "\n" + "HILL" + "\n" + "Breakfast: " + "7:30 am - 10 am" + "\n" + "Light Breakfast: " + "10 am - 11 am" + "\n" + "Lunch: " + "11 am - 2 pm" + "\n" + "Light Lunch: " + "2 pm - 5 pm" + "\n" + "Dinner: " + "5 pm - 7 pm" +
        "\n" + "KINGS COURT" + "\n" + "Breakfast: " + "8:30 am - 10:30 am" + "\n" + "Lunch: " + "11 am - 2 pm" + "\n" + "Dinner: " + "5 pm - 8 pm"; //Mon - Thurs good
    }
    else{ //Saturday
        return "Today is Saturday." + "\n" +
        "1920 COMMONS" + "\n" + "Brunch: " + "11 am - 3 pm" + "\n" + "Dinner: " + "5 pm - 7 pm" +
        "\n" + "HILL" + "\n" + "Brunch: " + "11 am - 3 pm" + "\n" + "Dinner: " + "5 pm - 7 pm" +
        "\n" + "KINGS COURT" + "\n" + "Closed on weekends."; //Saturday good
    }

}
