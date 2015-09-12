var mongoose = require('mongoose');
     Events = require('../models/eventModel'),
     eventTest = require('../models/testModel');


module.exports=function() {
	//mongoose.connect('mongodb://localhost/thesis');
	mongoose.connect('mongodb://thesis:thesis@ds049538.mongolab.com:49538/thesis');
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error ...'));
	db.once('open', function callback() {
		console.log('Connected Thesis DB');
	});
};

//Events.createDefaultEvents();