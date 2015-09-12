var mongoose = require('mongoose'),
	courseModel = require('../models/Events');


module.exports = function(mongoDBConfig){

	mongoose.connect(mongoDBConfig.db);

	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error ...'));
	db.once('open', function callback() {
	    console.log('multivision db opened');
	});


  courseModel.createDefaultCourses();
};
