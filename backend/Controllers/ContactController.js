const contactModel = require('../Models/Contact-Model')
const studentModel = require('../Models/StudentReview-Model')

//* ----------------------------
//* Contacts Form Crud operation
//* ----------------------------

//TODO Contact Form By Post Method
const postContact = async (req, res) => {
    try {
        const response = req.body;
        const contactForm = await contactModel.insertMany(response);
        return res.status(200).json({ contactForm, success: true })
    } catch (error) {
        return res.status(404).json({ error, message, success: false })
    }
};



//* --------------------------------------------------------
//* Students Reviews Crud operation
//* --------------------------------------------------------

//* Students Review By Get Method
//* ------------------------------
const getStudentsReview = async (req, res) => {
    try {
        const studentReview = await studentModel.find();
        return res.status(200).json(studentReview)
    } catch (error) {
        return res.status(404).json({ error, message })
    }
};

//* Get Individual Students Review Data
//* -----------------------------------
const getIndividualStudentsReview = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await studentModel.findOne({ _id: id });
        return res.status(200).json(data);
    } catch (error) {
        return res.status(404).json({ message, error });
    }
};

//? Update Students Review Data
//?  --------------------------
const updateStudentsReview = async (req, res) => {
    try {
        const id = req.params.id;
        const updateFormData = req.body;
        const data = await studentModel.updateOne(
            { _id: id },
            {
                $set: updateFormData
            });
        return res.status(200).json(data);
    } catch (error) {
        return res.status(404).json({ message, error });
    }
};

//TODO Students Review By Post Method
const postStudentsReview = async (req, res) => {
    try {
        const response = req.body;
        const studentReview = await studentModel.insertMany(response);
        return res.status(200).json({ studentReview, success: true })
    } catch (error) {
        return res.status(404).json({ error, message, success: false })
    }
};


module.exports = { postContact, getStudentsReview, getIndividualStudentsReview, updateStudentsReview, postStudentsReview }