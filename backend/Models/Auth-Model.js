const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthSchema = new Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    // isAdmin: {
    //     type: Boolean,
    //     require: true,
    //     default: false,
    // }
});


const authSchema = mongoose.model('AuthAdmin', AuthSchema);
module.exports = authSchema