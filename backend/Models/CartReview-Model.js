const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartReviewSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    countUp: {
        type: String,
        require: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
});


const cartReviewSchema = mongoose.model('CartReview', CartReviewSchema);
module.exports = cartReviewSchema