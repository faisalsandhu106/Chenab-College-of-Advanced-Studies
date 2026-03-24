const mongoose = require('mongoose');

const connectDB = (url) => {
    console.log('Connected DB--------')
    return mongoose.connect(url)
};

module.exports = connectDB