const adminController = require('../Controllers/AdminController')
const route = require('express').Router();


//TODO ----------------------------------------
//TODO Crud Operations Admin Profile API Data
//TODO ----------------------------------------
route.get('/adminProfile', adminController.getAdminProfile);
route.get('/adminProfile/:id', adminController.getAdminProfileById);
route.patch('/adminProfile/update/:id', adminController.updateAdminProfileById);
route.delete('/adminProfile/delete/:id', adminController.deletelAdminProfile);


//* --------------------------------
//* Crud Operations Courses API Data
//* --------------------------------
route.get('/allcourse', adminController.getAllcourse);
route.get('/allcourse/:id', adminController.getIndividualAllcourse);
route.delete('/allcourse/delete/:id', adminController.deletelAllcourse);
route.patch('/allcourse/update/:id', adminController.updateAllcourse);
route.post('/allcourse/createCourse', adminController.createCourse);



//? ----------------------------------------
//? Crud Operations Computer Course API Data
//? ----------------------------------------
route.get('/allComputerCourse', adminController.getAllComputerCourse);
route.get('/allComputerCourse/:id', adminController.getIndividualComputerCourse);
route.delete('/ComputerCourse/delete/:id', adminController.deletelComputerCourse);
route.patch('/ComputerCourse/update/:id', adminController.updateComputerCourse);
route.post('/ComputerCourse/createComputerCourse', adminController.createComputerCourse);


//! --------------------------------
//! Crud Operations Events API Data
//! --------------------------------
route.get('/allevent', adminController.getAllevent);
route.get('/allevent/:id', adminController.getIndividualEvent);
route.delete('/event/delete/:id', adminController.deletelEvent);
route.patch('/event/update/:id', adminController.updateEvent);
route.post('/event/createEvent', adminController.createEvent);


//TODO -------------------------------------
//TODO Crud Operations Contact Form API Data
//TODO -------------------------------------
route.get('/allContactForm', adminController.getAllContactForm);
route.get('/allContactForm/:id', adminController.getIndividualContactForm);
route.delete('/ContactForm/delete/:id', adminController.deletelContactForm);


//* ----------------------------------------
//* Crud Operations Student Reviews API Data
//* ----------------------------------------
route.get('/allStudentReview', adminController.getAllstudentReview);
route.get('/allStudentReview/:id', adminController.getIndividualStudentReview);
route.delete('/studentReview/delete/:id', adminController.deletelStudentReview);


//? ----------------------------------------
//? Crud Operations Student Addmission API Data
//? ----------------------------------------
route.get('/allStudentAddmission', adminController.getAllstudentAddmission);
route.get('/allStudentAddmission/:id', adminController.getIndividualStudentAddmission);
route.delete('/studentAddmission/delete/:id', adminController.deletelStudentAddmission);


//TODO -------------------------------------
//TODO Crud Operations Cart Reviews API Data
//TODO -------------------------------------
route.get('/allCartReview', adminController.getCartReview);
route.get('/allCartReview/:id', adminController.getIndividualCartReview);
route.patch('/cartReview/update/:id', adminController.updateCartReview);
route.post('/cartReview/create', adminController.createCartReview);





module.exports = route