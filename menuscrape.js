var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();
var http = require('http');
var Parser = require("simple-text-parser"),
	parser = new Parser();

//comons
app.get('/commons', function(req, res){

	//Web scraping stuff

	//The URL for 1920 Commons
	url = 'http://cms.business-services.upenn.edu/dining/hours-locations-a-menus/residential-dining/1920-commons/1920-menu.html';

	//structure of request call
	//first param is URL
	//callback funct takes 3 params: error, response status code and html
	request(url, function(error, response, html){
		var finalResponse;

		//check for errors in request
		if (!error) {
			//get jQuery functionality
			var $ = cheerio.load(html);

			//define variable date (gets menu for given day)
			var menu;
			var json = {menu: ""};

			//use unique h2 tag as a starting point
			var i = 0;
			//use unique h2 tag as a starting point
			//tbody.html and then parse everything because hacky
			$('table.contentpaneopen').filter(function() {
				//store data that is being filtered into a variable
				if (i == 0) {
					i++;
				} else {

					var data = $(this);

				//use jQuery to get the text
				menu = data.children().first().text();
				console.log(menu);
				//story date into json object
				json.menu = menu;
					//use jQuery to get the text
					menu = data.children().first().text();
					// console.log(menu);

					// create an array to represent the entire menu
					var menuarray = menu.split('\n');

					// go through each item in the menu array and cut it off before the first '-' to shorten the text.
					for (var i = 0; i < menuarray.length; i++) {
						var menuItem = menuarray[i];
						var splitMenu = menuItem.split("-");
						menuarray[i] = splitMenu[0];
					}

					// get rid of everything after the first parenthesis
					// i got lazy so i just copied teh previous thing and changed the symbol
					for (var i = 0; i < menuarray.length; i++) {
						var menuItem = menuarray[i];
						var splitMenu = menuItem.split("(");
						menuarray[i] = splitMenu[0];

						menuarray[i].trim();
						menuarray[i].replace(/^\+|\s+$/gm,'');
					}


					var menuString = "";
					for (var i = 0; i < menuarray.length; i++) {
						menuString += menuarray[i] + '\n';
					}

					menuString = menuString.trim();

					// split the menu into lunch and dinner
					var lunchAndDinner = menuString.split("DINNER");

					var lunchAndBreakfastString = lunchAndDinner[0];
					var lunchAndBreakfast = lunchAndBreakfastString.split("LUNCH");

					var dinner = lunchAndDinner[1];
					var lunch = lunchAndBreakfast[1];
					var breakfast = lunchAndBreakfast[0];

					var menuAsJSON = {
						"breakfast": breakfast,
						"lunch"	   : lunch,
						"dinner"   : dinner
					}

					console.log(menuAsJSON);
					finalResponse = menuAsJSON;

					//story date into json object
					json.menu = menu;
				}
			});
		}

		//message reminding us that app doesn't have UI
		res.send(finalResponse);
	})
//I ADDED A SEMI COLON HERE, SHOULD IT BE HERE? See for potential errors
});

//HILL
app.get('/hill', function(req, res){
		//Web scraping stuff

	//The URL for 1920 Commons
	url = 'http://cms.business-services.upenn.edu/dining/hours-locations-a-menus/residential-dining/hill-house/daily-menu.html';

	//structure of request call
	//first param is URL
	//callback funct takes 3 params: error, response status code and html
	request(url, function(error, response, html){
		var finalResponse;

		//check for errors in request
		if (!error) {
			//get jQuery functionality
			var $ = cheerio.load(html);

			//define variable date (gets menu for given day)
			var menu;
			var json = {menu: ""};

			//use unique h2 tag as a starting point
			var i = 0;
			//use unique h2 tag as a starting point
			//tbody.html and then parse everything because hacky
			$('table.contentpaneopen').filter(function() {
				//store data that is being filtered into a variable
				if (i == 0) {
					i++;
				} else {

					var data = $(this);

				//use jQuery to get the text
				menu = data.children().first().text();
				console.log(menu);
				//story date into json object
				json.menu = menu;
					//use jQuery to get the text
					menu = data.children().first().text();
					// console.log(menu);

					// create an array to represent the entire menu
					var menuarray = menu.split('\n');

					// go through each item in the menu array and cut it off before the first '-' to shorten the text.
					for (var i = 0; i < menuarray.length; i++) {
						var menuItem = menuarray[i];
						var splitMenu = menuItem.split("-");
						menuarray[i] = splitMenu[0];
					}

					// get rid of everything after the first parenthesis
					// i got lazy so i just copied teh previous thing and changed the symbol
					for (var i = 0; i < menuarray.length; i++) {
						var menuItem = menuarray[i];
						var splitMenu = menuItem.split("(");
						menuarray[i] = splitMenu[0];

						menuarray[i].trim();
						menuarray[i].replace(/^\+|\s+$/gm,'');
					}


					var menuString = "";
					for (var i = 0; i < menuarray.length; i++) {
						menuString += menuarray[i] + '\n';
					}

					menuString = menuString.trim();

					// split the menu into lunch and dinner
					var lunchAndDinner = menuString.split("DINNER");

					var lunchAndBreakfastString = lunchAndDinner[0];
					var lunchAndBreakfast = lunchAndBreakfastString.split("LUNCH");

					var dinner = lunchAndDinner[1];
					var lunch = lunchAndBreakfast[1];
					var breakfast = lunchAndBreakfast[0];

					var menuAsJSON = {
						"breakfast": breakfast,
						"lunch"	   : lunch,
						"dinner"   : dinner
					}

					console.log(menuAsJSON);
					finalResponse = menuAsJSON;

					//story date into json object
					json.menu = menu;
				}
			});
		}

		//message reminding us that app doesn't have UI
		res.send(finalResponse);
	})
});


//Kings Court
app.get('/kc', function(req, res){
			//Web scraping stuff

	//The URL for 1920 Commons
	url = 'http://cms.business-services.upenn.edu/dining/hours-locations-a-menus/residential-dining/english-house/daily-menu.html';

	//structure of request call
	//first param is URL
	//callback funct takes 3 params: error, response status code and html
	request(url, function(error, response, html){
		var finalResponse;

		//check for errors in request
		if (!error) {
			//get jQuery functionality
			var $ = cheerio.load(html);

			//define variable date (gets menu for given day)
			var menu;
			var json = {menu: ""};

			//use unique h2 tag as a starting point
			var i = 0;
			//use unique h2 tag as a starting point
			//tbody.html and then parse everything because hacky
			$('table.contentpaneopen').filter(function() {
				//store data that is being filtered into a variable
				if (i == 0) {
					i++;
				} else {

					var data = $(this);

				//use jQuery to get the text
				menu = data.children().first().text();
				console.log(menu);
				//story date into json object
				json.menu = menu;
					//use jQuery to get the text
					menu = data.children().first().text();
					// console.log(menu);

					// create an array to represent the entire menu
					var menuarray = menu.split('\n');

					// go through each item in the menu array and cut it off before the first '-' to shorten the text.
					for (var i = 0; i < menuarray.length; i++) {
						var menuItem = menuarray[i];
						var splitMenu = menuItem.split("-");
						menuarray[i] = splitMenu[0];
					}

					// get rid of everything after the first parenthesis
					// i got lazy so i just copied teh previous thing and changed the symbol
					for (var i = 0; i < menuarray.length; i++) {
						var menuItem = menuarray[i];
						var splitMenu = menuItem.split("(");
						menuarray[i] = splitMenu[0];

						menuarray[i].trim();
						menuarray[i].replace(/^\+|\s+$/gm,'');
					}


					var menuString = "";
					for (var i = 0; i < menuarray.length; i++) {
						menuString += menuarray[i] + '\n';
					}

					menuString = menuString.trim();

					// split the menu into lunch and dinner
					var lunchAndDinner = menuString.split("DINNER");

					var lunchAndBreakfastString = lunchAndDinner[0];
					var lunchAndBreakfast = lunchAndBreakfastString.split("LUNCH");

					var dinner = lunchAndDinner[1];
					var lunch = lunchAndBreakfast[1];
					var breakfast = lunchAndBreakfast[0];

					var menuAsJSON = {
						"breakfast": breakfast,
						"lunch"	   : lunch,
						"dinner"   : dinner
					}

					console.log(menuAsJSON);
					finalResponse = menuAsJSON;

					//story date into json object
					json.menu = menu;
				}
			});
		}

		//message reminding us that app doesn't have UI
		res.send(finalResponse);
	})
});


app.listen(8081)

console.log('See port 8081 \n');

exports = module.exports = app;

