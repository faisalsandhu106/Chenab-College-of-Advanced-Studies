// const { number, string } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddmissionFormModel = new Schema({
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
        unique: true,
    },

    streetName: {
        type: String,
        require: true,
    },

    cityName: {
        type: String,
        require: true,
    },

    stateName: {
        type: String,
        require: true,
    },

    zipCode: {
        type: Number,
        require: true,
    },

    phoneNumber: {
        type: String,
        require: true,
    },

    date: {
        type: Number,
        require: true,
    },

    month: {
        type: Number,
        require: true,
    },

    year: {
        type: Number,
        require: true,
    },

    courses: {
        type: String,
        require: true,
    },

    message: {
        type: String,
        require: true,
    },

    gender: {
        type: String,
        require: true,
    },

    created_at: {
        type: Date,
        default: Date
    }
})

const addmissionFormModel = mongoose.model('AddmissionForm', AddmissionFormModel);
module.exports = addmissionFormModel;





// date: {
//     type: String,
//         require: true,
//     },
// month: {
//     type: String,
//         require: true,
//     },
// year: {
//     type: String,
//         require: true,
//     },