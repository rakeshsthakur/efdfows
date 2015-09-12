/**
 * Created by rakeshthakur on 8/29/15.
 */
var mongoose = require('mongoose');

//our model now
var eventSchemaDate = mongoose.Schema({eventLocation: String, eventDate: String,eventYear : Number, eventNumber: Number});
var EventDate = mongoose.model("EventDate", eventSchemaDate);

exports.testEvents = function() {
    EventDate.create({eventLocation: "sanDiego", eventDate: "01-10-2001", eventYear: "2001", eventNumber: 20});
    EventDate.create({eventLocation: "CA", eventDate: "10-13-1952", eventYear: "1952", eventNumber: 21});
    EventDate.create({eventLocation: "OR", eventDate: "10-13-1999", eventYear: "1999", eventNumber: 21});
    EventDate.create({eventLocation: "WA", eventDate: "10-13-2000", eventYear: "2000", eventNumber: 23});
    EventDate.create({eventLocation: "WA", eventDate: "10-13-2015", eventYear: "2015", eventNumber: 23});
    EventDate.create({eventLocation: "OR", eventDate: "10-13-1999", eventYear: "1999", eventNumber: 23});
};