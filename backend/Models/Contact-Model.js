// const { number, string } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactModel = new Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phoneNumber: {
        type: String,
        require: false,
    },
    cityName: {
        type: String,
        require: true,
    },
    message: {
        type: String,
        require: true,
    },

    created_at: {
        type: Date,
        default: Date
    }
})

const contactModel = mongoose.model('Contact', ContactModel);
module.exports = contactModel;