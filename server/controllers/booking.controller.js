let Booking = require("../models/booking.model");

const getAllBookings = (req, res) => {
    let token = getToken(req.headers);
    if (token) {
        Booking.find(function (err, bookings) {
            if (err) return next(err);
            res.json(bookings);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
};

const getBookingById = (req, res, next) => {
    let token = getToken(req.headers);
    if (token) {
        Booking.findById(req.params.id, function (err, booking) {
            if (err) return next(err);
            res.json(booking);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
};

const setBooking = (req, res, next) => {
    let token = getToken(req.headers);
    if (token) {
        Booking.create(req.body, function (err, booking) {
            if (err) return next(err);
            res.json(booking);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
};

const updateBooking = (req, res, next) => {
    let token = getToken(req.headers);
    if (token) {
        Booking.findByIdAndUpdate(req.params.id, req.body, function (err, booking) {
            if (err) return next(err);
            res.json(booking);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
};

const deleteBooking = (req, res, next) => {
    let token = getToken(req.headers);
    if (token) {
        Booking.findByIdAndRemove(req.params.id, req.body, function (err, booking) {
            if (err) return next(err);
            res.json(booking);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
};

module.exports = {
    getAllBookings,
    deleteBooking,
    updateBooking,
    setBooking,
    getBookingById,
};

