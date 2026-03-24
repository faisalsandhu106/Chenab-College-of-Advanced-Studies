const express = require("express");
const app = express();
const bodyPaser = require("body-parser");
const cors = require('cors');
require('dotenv').config();

// *-------------------------------------------------------
// *Import Files Form ENV & Route & Middleware & Controller
// *-------------------------------------------------------

const PORT = process.env.PORT || 3000;
const connectDB = require('./DB/ConnectDB');

const authAdmin = require('./Routes/Auth-Route')
const AdminRoute = require('./Routes/Admin-Route')
const courseRoute = require('./Routes/Course-Route')
const eventRoute = require('./Routes/Event-Route')
const studentreview = require('./Routes/StudentReview-Route')
const contactRoute = require('./Routes/Contact-Route')
const addmissionFormRoute = require('./Routes/Addmission-Route')

app.get('/', (req, res) => {
    res.send('I am Live')
});

app.use(bodyPaser.json());
app.use(cors());

// *------------
// *Creat Routes
// *------------
app.use('/auth', authAdmin)
app.use('/admin', AdminRoute)
app.use('/api', courseRoute)
app.use('/api', eventRoute)
app.use('/api', studentreview)
app.use('/contact', contactRoute)
app.use('/', addmissionFormRoute)


const start = async () => {
    try {
        await connectDB(process.env.MONGOODB_URL)
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log('Your Server is not Running', error)
    }
};

start();