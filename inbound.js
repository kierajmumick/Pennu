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

    
    var hour = date.getHours(); 

	switch (diningHall.toLowerCase()) {
		case "hill":
			httpRequest("http://37440b7e.ngrok.com/hill", function(err, res, body) {
                if (!err) {
                    var meals = JSON.parse(body);
                    var currentMeal;

                    //return breakfast, lunch, or dinner based on hour
                    if (date.getDay() == 0 || date.getDay() == 6) {
                        if (hours > 10 && hours < 16) {
                            currentMeal = meals.lunch;
                        } else {
                            currentMeal = meals.dinner;
                        }
                    } else {
                        if (hour > 0 && hour < 12) {
                            currentMeal = meals.breakfast;
                        } else if (hour > 11 && hour < 15) {
                            currentMeal = meals.lunch;
                        } else {
                            currentMeal = meals.dinner;
                        }
                    }
                        

                    var resp = new Twilio.TwimlResponse();
                    resp.message("Hill's menu, " + dateString + "\n" + currentMeal);
                    console.log(meals.lunch);
                    response.end(resp.toString());
                }
            })
			break;
		case "commons":
            httpRequest("http://37440b7e.ngrok.com/commons", function(err, res, body) {
                if (!err) {
                    var meals = JSON.parse(body);
                    var currentMeal;

                    //return breakfast, lunch, or dinner based on hour
                    if (date.getDay() == 0 || date.getDay() == 6) {
                        if (hours > 10 && hours < 16) {
                            currentMeal = meals.lunch;
                        } else {
                            currentMeal = meals.dinner;
                        }
                    } else {
                        if (hour > 0 && hour < 12) {
                            currentMeal = meals.breakfast;
                        } else if (hour > 11 && hour < 15) {
                            currentMeal = meals.lunch;
                        } else {
                            currentMeal = meals.dinner;
                        }
                    }

                    var resp = new Twilio.TwimlResponse();
                    resp.message("Commons's menu, " + dateString + "\n" + currentMeal);
                    response.end(resp.toString());
                }
            })
			break;
		case "kc":
            httpRequest("http://37440b7e.ngrok.com/kc", function(err, res, body) {
                if (!err) {
                    var meals = JSON.parse(body);
                    var currentMeal;

                    //return breakfast, lunch, or dinner based on hour
                    if (date.getDay() == 0 || date.getDay() == 6) {
                        if (hours > 10 && hours < 16) {
                            currentMeal = meals.lunch;
                        } else {
                            currentMeal = meals.dinner;
                        }
                    } else {
                        if (hour > 0 && hour < 12) {
                            currentMeal = meals.breakfast;
                        } else if (hour > 11 && hour < 15) {
                            currentMeal = meals.lunch;
                        } else {
                            currentMeal = meals.dinner;
                        }
                    }

                    //if closed
                    var resp = new Twilio.TwimlResponse();
                    if (currentMeal == undefined) resp.message("Kings Court is closed today");
                    else resp.message("Kings Court's menu, " + dateString + "\n" + currentMeal);
                    if (resp.toString() == "undefined") {
                        response.end("Closed");
                    } else {
                        response.end(resp.toString());
                    }
                }
            })
			break;
		case "kings court":
            httpRequest("http://37440b7e.ngrok.com/kc", function(err, res, body) {
                if (!err) {
                    var meals = JSON.parse(body);
                    var currentMeal;

                    //return breakfast, lunch, or dinner based on hour
                    if (date.getDay() == 0 || date.getDay() == 6) {
                        if (hours > 10 && hours < 16) {
                            currentMeal = meals.lunch;
                        } else {
                            currentMeal = meals.dinner;
                        }
                    } else {
                        if (hour > 0 && hour < 12) {
                            currentMeal = meals.breakfast;
                        } else if (hour > 11 && hour < 15) {
                            currentMeal = meals.lunch;
                        } else {
                            currentMeal = meals.dinner;
                        }
                    }

                    //if closed
                    var resp = new Twilio.TwimlResponse();
                    if (currentMeal == undefined) resp.message("Kings Court is closed today");
                    else resp.message("Kings Court's menu, " + dateString + "\n" + currentMeal);
                    if (resp.toString() == "undefined") {
                        response.end("Closed");
                    } else {
                        response.end(resp.toString());
                    }
                }
            })
		case "hours":
			resp.message(diningHoursByDate());
            response.end(resp.toString());
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


