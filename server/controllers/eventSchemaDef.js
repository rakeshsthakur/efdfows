/**
 * Created by rakeshthakur on 8/29/15.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var eventSchema = Schema({
    eventLocation: String,
    eventDate: String,
    eventYear : Number,
    eventType: String,
    eventState :String,
    eventDeaths: Number,
    eventInjuries: Number,
    eventPropertyDamage : Number,
    eventBeginLatitude : Number,
    eventBeginLongitude : Number,
    eventEndLatitude : Number,
    eventEndLongitude :Number,
    eventCreatedOn : { type:Date, default: Date.now }}, {collection: "eventhistory"});

module.exports.Events = mongoose.model('Events', eventSchema);