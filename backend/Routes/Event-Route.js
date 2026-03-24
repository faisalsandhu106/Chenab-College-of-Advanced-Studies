const eventController = require('../Controllers/EventController')
const route = require('express').Router();

route.get('/event', eventController.getEventData )
route.get('/event/:id', eventController.getIndividualEvent )

module.exports = route
