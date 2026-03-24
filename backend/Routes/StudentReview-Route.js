const studentReviewController = require('../Controllers/CourseController')
const route = require('express').Router();

route.get('/studentreview', (req, res) => {
    res.send("i am studentreview Route")
});

// studentReviewController.getAllStudentReview

module.exports = route
