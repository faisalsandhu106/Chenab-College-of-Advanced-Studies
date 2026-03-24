const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ITcourseScheme = new Schema({
    CourseName: {
        type: String,
        require: true,
    },
    courseDetail: {
        type: String,
        require: true
    },
    imageUrl: {
        type: String,
        require: true
    },
    videoUrl: {
        type: String,
        require: true
    },
    future: {
        type: String,
        require: true,
    },
});

const itCourseScheme = mongoose.model('ITcourse', ITcourseScheme);
module.exports = itCourseScheme