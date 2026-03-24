const addmissionFormController = require('../Controllers/AddmissionController')
const route = require('express').Router();

route.post('/addmissionForm', addmissionFormController.postAddmissionForm)


module.exports = route