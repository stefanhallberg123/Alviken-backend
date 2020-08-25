const mongoose = require("mongoose");

const Booking = new mongoose.Schema({
    comment: { type: String },
    date: { type: Date, default: Date.now },
    timeslot: { type: String, },
    qty: { type: String },
    user: {
        name: { type: String },
        email: { type: String },
        phone: { type: String },
        customerId: { type: Number }
    },
});


const BookingSchema = mongoose.model("booking", Booking)

module.exports = BookingSchema;