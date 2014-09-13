var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();
var http = require('http');

app.get('/scrape', function(req, res){

	//Web scraping stuff

	//The URL for 1920 Commons
	url = 'http://cms.business-services.upenn.edu/dining/hours-locations-a-menus/residential-dining/1920-commons/1920-menu.html';

	//structure of request call
	//first param is URL
	//callback funct takes 3 params: error, response status code and html
	request(url, function(error, response, html){

		//check for errors in request
		if (!error) {
			//get jQuery functionality
			var $ = cheerio.load(html);

			//define variable date (gets menu for given day)
			var menu;
			var json = {menu: ""};

			//use unique h2 tag as a starting point
			//tbody.html and then parse everything because hacky
			$('.contentpaneopen').filter(function() {
				//store data that is being filtered into a variable

				var data = $(this);

				//use jQuery to get the text
				menu = data.children().first().text();

				//story date into json object
				json.menu = menu;
			});
		}

		//write out page to computer with writeText fucntion
		//param 1: output.json - created filename is called this
		//param 2 JSON.stringify(json, null, 4) data to write
		//param 3: callback function, let us know status of function

		var menuString = JSON.stringify(json, null, 4);
		console.log(menuString);
		// fs.writeText('output.json', JSON.stringify(json, null, 4), function(err){
		// 	console.log('File written! check project directory for output.json file');
		// })

		//message reminding us that app doesn't have UI
		res.send('Check console')
	})
})

app.listen(8081)

console.log('See port 8081');

exports = module.exports = app;

