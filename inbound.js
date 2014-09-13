var Twilio = require('twilio');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var http = require('http');
var httpRequest = require('request');

var bodyParser = require('body-parser');

app.use(bodyParser());

app.post('/', function(request, response) {

	var diningHall = request.body.Body;
	var resp = new Twilio.TwimlResponse();
    response.writeHead(200, {'Content-type': 'text/xml'});
	var date = new Date();
	var dateString = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
	switch (diningHall.toLowerCase()) {
		case "hill":
			resp.message("Hill's menu for " + dateString);
			break;
		case "commons":
            // $.get("http://56ee6e67.ngrok.com/", function(res) {
            //     console.log(res);
            // });

            httpRequest("http://56ee6e67.ngrok.com/", function(err, res, body) {
                if (!err) {
                    var meals = JSON.parse(body);

                    var resp = new Twilio.TwimlResponse();
                    resp.message("Commons's menu, " + dateString + "\n" + meals.dinner);
                    response.end(resp.toString());
                }
            })
			break;
		case "kc":
			resp.message("This is Kings Court's menu " + dateString);
			break;
		case "kings court":
			resp.message("This is Kings Court's menu " + dateString);
		case "hours":
			resp.message(diningHoursByDate());
			break;
		default:
			resp.message("Invalid! For Menus, reply with \"Hill\", \"Commons\", or \"KC\". For Hours, reply with \"Hours\"");
			break;
	}


})

app.listen(1337);

console.log('Visit http://localhost:1337/ in your browser to see your TwiML document!');


function diningHoursByDate() {

    var n = new Date().getDay();
    if(n===0){ //Sunday
        return "Today is Sunday. \n \n 1920 COMMONS \n Brunch: 11 am - 3 pm \n Dinner: 5 pm - 8 pm \n \n HILL \n Brunch: " + "11 am - 3 pm" + "\n" + "Dinner: " + "5 pm - 8 pm" + "\n" + "Express: " + "8 pm - 12 am" +
        "\n \n" + "KINGS COURT" + "\n" + "Closed on weekends."; //Sunday is good
    }
    else if(n==1){ //Monday
        return "Today is Monday." + "\n \n" +
        "1920 COMMONS" + "\n" + "Lunch: " + "11 am - 2 pm" + "\n" + "Dinner: " + "5 pm - 9 pm" +
        "\n \n " + "HILL" + "\n" + "Breakfast: " + "7:30 am - 10 am" + "\n" + "Light Breakfast: " + "10 am - 11 am" + "\n" + "Lunch: " + "11 am - 2 pm" + "\n" + "Light Lunch: " + "2 pm - 5 pm" + "\n" + "Dinner: " + "5 pm - 8 pm" + "\n" + "Express: " + "8 pm - 12 am" + 
        "\n \n" + "KINGS COURT" + "\n" + "Breakfast: " + "8:30 am - 10:30 am" + "\n" + "Lunch: " + "11 am - 2 pm" + "\n" + "Dinner: " + "5 pm - 8 pm"; //Mon - Thurs good
    }
    else if (n==2){ //Tuesday
        return "Today is Tuesday." + "\n \n" +
        "1920 COMMONS" + "\n" + "Lunch: " + "11 am - 2 pm" + "\n" + "Dinner: " + "5 pm - 9 pm" +
        "\n \n" + "HILL" + "\n" + "Breakfast: " + "7:30 am - 10 am" + "\n" + "Light Breakfast: " + "10 am - 11 am" + "\n" + "Lunch: " + "11 am - 2 pm" + "\n" + "Light Lunch: " + "2 pm - 5 pm" + "\n" + "Dinner: " + "5 pm - 8 pm" + "\n" + "Express: " + "8 pm - 12 am" + 
        "\n \n" + "KINGS COURT" + "\n" + "Breakfast: " + "8:30 am - 10:30 am" + "\n" + "Lunch: " + "11 am - 2 pm" + "\n" + "Dinner: " + "5 pm - 8 pm"; //Mon - Thurs good
    }
    else if (n==3){ //Wednesday
        return "Today is Wednesday." + "\n \n" +
        "1920 COMMONS" + "\n" + "Lunch: " + "11 am - 2 pm" + "\n" + "Dinner: " + "5 pm - 9 pm" +
        "\n \n" + "HILL" + "\n" + "Breakfast: " + "7:30 am - 10 am" + "\n" + "Light Breakfast: " + "10 am - 11 am" + "\n" + "Lunch: " + "11 am - 2 pm" + "\n" + "Light Lunch: " + "2 pm - 5 pm" + "\n" + "Dinner: " + "5 pm - 8 pm" + "\n" + "Express: " + "8 pm - 12 am" + 
        "\n \n" + "KINGS COURT" + "\n" + "Breakfast: " + "8:30 am - 10:30 am" + "\n" + "Lunch: " + "11 am - 2 pm" + "\n" + "Dinner: " + "5 pm - 8 pm"; //Mon - Thurs good
    }
    else if (n==4){ //Thursday
        return "Today is Thursday." + "\n \n" +
        "1920 COMMONS" + "\n" + "Lunch: " + "11 am - 2 pm" + "\n" + "Dinner: " + "5 pm - 9 pm" +
        "\n \n" + "HILL" + "\n" + "Breakfast: " + "7:30 am - 10 am" + "\n" + "Light Breakfast: " + "10 am - 11 am" + "\n" + "Lunch: " + "11 am - 2 pm" + "\n" + "Light Lunch: " + "2 pm - 5 pm" + "\n" + "Dinner: " + "5 pm - 8 pm" + "\n" + "Express: " + "8 pm - 12 am" + 
        "\n \n" + "KINGS COURT" + "\n" + "Breakfast: " + "8:30 am - 10:30 am" + "\n" + "Lunch: " + "11 am - 2 pm" + "\n" + "Dinner: " + "5 pm - 8 pm"; //Mon - Thurs good
    }
    else if(n==5){ //Friday
        return "Today is Friday." + "\n \n" +
        "1920 COMMONS" + "\n" + "Lunch: " + "11 am - 2 pm" + "\n" + "Dinner: " + "5 pm - 7:30 pm" +
        "\n \n" + "HILL" + "\n" + "Breakfast: " + "7:30 am - 10 am" + "\n" + "Light Breakfast: " + "10 am - 11 am" + "\n" + "Lunch: " + "11 am - 2 pm" + "\n" + "Light Lunch: " + "2 pm - 5 pm" + "\n" + "Dinner: " + "5 pm - 7 pm" +
        "\n \n" + "KINGS COURT" + "\n" + "Breakfast: " + "8:30 am - 10:30 am" + "\n" + "Lunch: " + "11 am - 2 pm" + "\n" + "Dinner: " + "5 pm - 8 pm"; //Mon - Thurs good
    }
    else{ //Saturday
        return "Today is Saturday." + "\n \n" +
        "1920 COMMONS" + "\n" + "Brunch: " + "11 am - 3 pm" + "\n" + "Dinner: " + "5 pm - 7 pm" +
        "\n \n" + "HILL" + "\n" + "Brunch: " + "11 am - 3 pm" + "\n" + "Dinner: " + "5 pm - 7 pm" +
        "\n \n" + "KINGS COURT" + "\n" + "Closed on weekends."; //Saturday good
    }

}


