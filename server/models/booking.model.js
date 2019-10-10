let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let BookingSchema = new mongoose.Schema({
    book_id: String,
    user_id: String,
    agency_id: String,
    postContent: String,
    number_of_seats: Number,
    created: { type: Date },
    expiring: { type: Date },
    updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', BookingSchema);
