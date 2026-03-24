// const { number, string } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentModel = new Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    UniName: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    rollNo: {
        type: String,
        require: true
    },
    semester: {
        type: Number,
        require: true
    },
    rating: {
        type: Number,
        require: true
    },
    department: {
        type: String,
        require: true
    },
    review: {
        type: String,
        require: true
    },
    created_at: {
        type: Date,
        default: Date
    }
})

const studentModel = mongoose.model('StudentsReview', StudentModel);
module.exports = studentModel;