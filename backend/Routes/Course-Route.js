const CoursController = require('../Controllers/CourseController')
const route = require('express').Router();

//* Subject Courses
route.get('/course', CoursController.getCourse)
route.get('/course/:id', CoursController.getIndividualCourse)


//* Computer Course
route.get('/ITcourse', CoursController.getITCourse)
route.get('/ITcourse/:id', CoursController.getIndividualCourse)


module.exports = route;