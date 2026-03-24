// const { number, string } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventModel = new Schema({
    eventTitle: {
        type: String,
        require: false
    },
    shortEventDetails: {
        type: String,
        require: false
    },
    longEventDetails: {
        type: String,
        require: false
    },

    category: {
        type: String,
        require: false
    },

    date: [],

    future: {
        type: String,
        require: true
    },
    
    imageUrl: [],

    eventFee: {
        type: String,
        require: false
    },

    rating: {
        type: String,
        require: false
    },

    eventLocation: {
        type: String,
        require: false
    },

    socialLink: [],

    eventOrganizer: []

})

const EventModel = mongoose.model('Event', eventModel);

module.exports = EventModel;