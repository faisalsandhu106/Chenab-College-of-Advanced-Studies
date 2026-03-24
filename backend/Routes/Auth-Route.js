const authController = require('../Controllers/Auth-Controller');
const authMiddleware = require('../MiddleWare/AuthValidation')
const route = require('express').Router();

route.post('/signUp', authMiddleware.signupValidation, authController.signUp ); 
route.post('/login', authMiddleware.loginValidation, authController.login ); 


module.exports = route