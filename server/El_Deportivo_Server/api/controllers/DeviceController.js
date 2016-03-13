/**
 * DevicesController
 *
 * @description :: Server-side logic for managing devices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	findOrCreate: function(req, res){

		var deviceid = req.body.deviceid;

		// Device
		// 	.findOrCreate({ deviceid: deviceid }, { deviceid: deviceid })
		// 	.then(function(data){
		// 		return res.send(data)
		// 	})

		Device.findOne({ deviceid: deviceid }).exec(function (err, device) {

			if (device){
				
				device.verb = 'GET';

				return res.send(device)

			}
			else {
			 
//				Categoria.find({}).exec(function(err, categorias){
//
//
//					var arr = []
//
//					for (var i = categorias.length - 1; i >= 0; i--) {
//
//						var obj = {}
//
//						obj[categorias[i].id] = true;
//
//						arr.push(obj);
//
//					}


					Device.create({ deviceid: deviceid }).exec(function(err, device){

						device.verb = 'POST';

						Categoria.find({}).exec(function(err, categorias){
	
							device.categorias = categorias

							return res.send(device)

						})



					})



//				})

			}

		})


	}
};

