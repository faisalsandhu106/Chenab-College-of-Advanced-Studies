require('dotenv').config();
const ConnectionDB = require('./DB/ConnectDB');
const model = require('./Models/Course-Model');
const CartReview = require('./CartReview.json')

const sentToDB = async () => {
    try {
        await ConnectionDB(process.env.MONGOODB_URL);
        await model.deleteMany();
        await model.create(CartReview);
        console.log('Data Exporting Data successfully');
    } catch (error) {
            
    }
};

sentToDB();