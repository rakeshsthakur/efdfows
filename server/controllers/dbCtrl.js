/**
 * Created by rakeshthakur on 8/29/15.
 */
require('../models/eventModel');
var mongoose  = require('mongoose'),
    Events = mongoose.model('Events');

module.exports.dbQuery= function(req,res){
    var Query =eval("("+req.params.eventUserData+")");
    Events.find(Query, function (err,collection) {
        if (err) return false;
        res.json(collection);
    });
};
