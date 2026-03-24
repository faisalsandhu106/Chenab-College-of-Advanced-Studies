const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseScheme = new Schema({
    title: {
        type: String,
        require: true,
    },
    courseFee: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    duration: {
        type: String,
        require: true
    },
    level: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true,
    },
    feature: {
        type: String,
        require: true,
    },
});

const CourseScheme = mongoose.model('course', courseScheme);
module.exports = CourseScheme