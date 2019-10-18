let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AgencySchema = new mongoose.Schema({
    agency_id: String,
    agency_name: String,
    agency_location_string: String, /*TODO Change to array of strings as agency can have multiple locations*/
    agency_location: Number, /* In longitude and latitude*/
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Agency', AgencySchema);
