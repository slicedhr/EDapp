
var appID = "64cbaa44-6057-4cfb-8b29-b87020fb880c";

var headers = {
    "Content-Type": "application/json",
    "Authorization": "Basic NDQ2M2E2YjctOTc2My00MGU2LWJiNjktYjZlMzkzODc1YTIz"
};


module.exports = {

	getNotifications: function(req, res){

		var request = require('request');

		var options = {

			url: 'https://onesignal.com/api/v1/notifications?app_id=' + appID + '&limit=5',

			method: 'GET',

			headers: headers,

		}

		request(options, function (err, response, body){

			if (err) return res.send(err);

			return res.send(body);

		})

	},

	sendNotifications: function(req, res){

		var request = require('request');

		var data = req.body.data;

		data.app_id = appID;

		data.android_accent_color = 'ff000000';

		data.small_icon = req.headers.host + '/images/drawable-ldpi-icon.png';

		data.large_icon = req.headers.host + '/images/icon.png';
		  
		var options = {
		    url: "https://onesignal.com:443/api/v1/notifications",
		    method: "POST",
		    headers: headers,
		    body: data,
		    json: true
		};

		request(options, function (err, response, body){

			if (err) return res.send(err);

			return res.send(body)


		})
		  

		


	}

}

