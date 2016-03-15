
var appID = "5fc5dbef-a106-473d-adc6-648a9b5ff9a7";

var headers = {
    "Content-Type": "application/json",
    "Authorization": "Basic MWFmODE5YzYtMmNmMC00YmIxLTk2ZjMtYjQ1M2ZhNTY5YjQx"
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

