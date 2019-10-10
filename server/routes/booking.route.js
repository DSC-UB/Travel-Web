let router = require('express').Router();

let passport = require('passport');
require('../config/passport')(passport);


const BookingController = require("../controllers/booking.controller");

const authPassword = passport.authenticate('jwt', { session: false});


router.get('/', authPassword, BookingController.getAllBookings);

router.get('/:id', authPassword, BookingController.getBookingById);

router.post('/', authPassword, BookingController.setBooking);

router.put('/:id', authPassword, BookingController.updateBooking);

router.delete('/:id', authPassword, BookingController.deleteBooking);

module.exports = router;
