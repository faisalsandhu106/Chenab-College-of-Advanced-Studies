const contactController = require('../Controllers/ContactController')
const route = require('express').Router();

//TODO Contact Form Routes
route.post('/user', contactController.postContact)


//TODO Students Review Routes
route.post('/reviewform', contactController.postStudentsReview)
route.get('/studentreview', contactController.getStudentsReview)
route.get('/studentreview/:id', contactController.getIndividualStudentsReview)
route.patch('/studentreview/update/:id', contactController.updateStudentsReview)    
// route.delete('/user/delete/:id', adminController.deleteUser);


module.exports = route