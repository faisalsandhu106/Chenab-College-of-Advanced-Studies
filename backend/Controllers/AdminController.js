const authModel = require('../Models/Auth-Model')
const courseModel = require('../Models/Course-Model')
const eventModel = require('../Models/Event-Model')
const computerCourseModel = require('../Models/ITCourse-Model')
const contactFormModel = require('../Models/Contact-Model')
const addmissionModel = require('../Models/AddmissionForm-Model')
const studentReviewModel = require('../Models/StudentReview-Model')
const cartReviewModel = require('../Models/CartReview-Model')


//TODO --------------------------------------------------Course Crud Operations---------------------------------------------------------------

//* Get Course Data In Admin Panel
//* ------------------------------
const getAllcourse = async (req, res) => {
    try {
        const data = await courseModel.find({})
        if (!courseModel || courseModel.length === 0) {
            return res.status(404).json({ message: "course API is empty" })
        };
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json({ message: "Get All Course Admin Error", error })
    }
};

//* Get Individual Course Data In Admin Panel
//* -----------------------------------------
const getIndividualAllcourse = async (req, res) => {
    try {
        const id = req.params.id
        const data = await courseModel.findOne({ _id: id })
        if (!courseModel || courseModel.length === 0) {
            return res.status(404).json({ message: "Individual course API is empty" })
        };
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json({ message: "Get Individual Course Admin Error", error })
    }
};

//! Delete Course Data In Admin Panel
//! ---------------------------------
const deletelAllcourse = async (req, res) => {
    try {
        const id = req.params.id
        const data = await courseModel.deleteOne({ _id: id })
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json({ message: "Delete All Course Admin Error", error })
    }
};

//TODO Update Course Data In Admin Panel
//TODO ---------------------------------
const updateAllcourse = async (req, res) => {
    try {
        const id = req.params.id;
        const update = req.body;
        const data = await courseModel.updateOne(
            { _id: id },
            {
                $set: update
            })
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json({ message: "Update Course Admin Error", error })
    }
};

//? Create Course Data In Admin Panel
//? ---------------------------------
const createCourse = async (req, res) => {
    try {
        const res = req.body
        const data = await courseModel.insertMany(res)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json({ message: "Create Course Admin Error", error })
    }
};



//TODO ------------------------------------------------Computer Course Crud Operations------------------------------------------------------------

//* Get Event Data In Admin Panel
//* ------------------------------
const getAllComputerCourse = async (req, res) => {
    try {
        const data = await computerCourseModel.find({})
        if (!computerCourseModel || computerCourseModel.length === 0) {
            return res.status(404).json({ message: "API is empty" })
        };
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json(error)
    }
};

//* Get Individual Event Data In Admin Panel
//* -----------------------------------------
const getIndividualComputerCourse = async (req, res) => {
    try {
        const id = req.params.id
        const data = await computerCourseModel.findOne({ _id: id })
        if (!computerCourseModel || computerCourseModel.length === 0) {
            return res.status(404).json({ message: "Individual API data is empty" })
        };
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json(error)
    }
};

//! Delete Event Data In Admin Panel
//! ---------------------------------
const deletelComputerCourse = async (req, res) => {
    try {
        const id = req.params.id
        const data = await computerCourseModel.deleteOne({ _id: id })
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json(error)
    }
};

//TODO Update Event Data In Admin Panel
//TODO ---------------------------------
const updateComputerCourse = async (req, res) => {
    try {
        const id = req.params.id;
        const update = req.body;
        const data = await computerCourseModel.updateOne(
            { _id: id },
            {
                $set: update
            })
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json(error)
    }
};

//? Create Event Data In Admin Panel
//? ---------------------------------
const createComputerCourse = async (req, res) => {
    try {
        const res = req.body
        const data = await computerCourseModel.insertMany(res)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json(error)
    }
};



//TODO --------------------------------------------------Event Crud Operations---------------------------------------------------------------

//* Get Event Data In Admin Panel
//* ------------------------------
const getAllevent = async (req, res) => {
    try {
        const data = await eventModel.find({})
        if (!eventModel || eventModel.length === 0) {
            return res.status(404).json({ message: "API is empty" })
        };
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json(error)
    }
};

//* Get Individual Event Data In Admin Panel
//* -----------------------------------------
const getIndividualEvent = async (req, res) => {
    try {
        const id = req.params.id
        const data = await eventModel.findOne({ _id: id })
        if (!eventModel || eventModel.length === 0) {
            return res.status(404).json({ message: "Individual API data is empty" })
        };
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json(error)
    }
};

//! Delete Event Data In Admin Panel
//! ---------------------------------
const deletelEvent = async (req, res) => {
    try {
        const id = req.params.id
        const data = await eventModel.deleteOne({ _id: id })
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json(error)
    }
};

//TODO Update Event Data In Admin Panel
//TODO ---------------------------------
const updateEvent = async (req, res) => {
    try {
        const id = req.params.id;
        const update = req.body;
        const data = await eventModel.updateOne(
            { _id: id },
            {
                $set: update
            })
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json(error)
    }
};

//? Create Event Data In Admin Panel
//? ---------------------------------
const createEvent = async (req, res) => {
    try {
        const res = req.body
        const data = await eventModel.insertMany(res)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json(error)
    }
};



//TODO ------------------------------------------------Contact Form Crud Operations-------------------------------------------------------------

//* Get Contact Form Data In Admin Panel
//* ------------------------------------
const getAllContactForm = async (req, res) => {
    try {
        const data = await contactFormModel.find({})
        if (!contactFormModel || contactFormModel.length === 0) {
            return res.status(404).json({ message: "API is empty" })
        };
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json(error)
    }
};

//* Get Individual Contact Form Data In Admin Panel
//* -----------------------------------------------
const getIndividualContactForm = async (req, res) => {
    try {
        const id = req.params.id
        const data = await contactFormModel.findOne({ _id: id })
        if (!contactFormModel || contactFormModel.length === 0) {
            return res.status(404).json({ message: "Individual API data is empty" })
        };
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json(error)
    }
};

//! Delete Contact Form Data In Admin Panel
//! ---------------------------------------
const deletelContactForm = async (req, res) => {
    try {
        const id = req.params.id
        const data = await contactFormModel.deleteOne({ _id: id })
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json(error)
    }
};



//TODO ------------------------------------------------Student Reviews Crud Operations-------------------------------------------------------------

//* Get Student Review Data In Admin Panel
//* --------------------------------------
const getAllstudentReview = async (req, res) => {
    try {
        const data = await studentReviewModel.find({})
        if (!studentReviewModel || studentReviewModel.length === 0) {
            return res.status(404).json({ message: "API is empty" })
        };
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json(error)
    }
};

//* Get Individual Student Review Data In Admin Panel
//* -------------------------------------------------
const getIndividualStudentReview = async (req, res) => {
    try {
        const id = req.params.id
        const data = await studentReviewModel.findOne({ _id: id })
        if (!studentReviewModel || studentReviewModel.length === 0) {
            return res.status(404).json({ message: "Individual API data is empty" })
        };
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json(error)
    }
};

//! Delete Student Review Data In Admin Panel
//! -----------------------------------------
const deletelStudentReview = async (req, res) => {
    try {
        const id = req.params.id
        const data = await studentReviewModel.deleteOne({ _id: id })
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json(error)
    }
};



//TODO ------------------------------------------------Student Reviews Crud Operations-------------------------------------------------------------

//* Get Student Addmission Data In Admin Panel
//* --------------------------------------
const getAllstudentAddmission = async (req, res) => {
    try {
        const data = await addmissionModel.find({})
        if (!addmissionModel || addmissionModel.length === 0) {
            return res.status(404).json({ message: "API is empty" })
        };
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json(error)
    }
};

//* Get Individual Student Addmission Data In Admin Panel
//* -------------------------------------------------
const getIndividualStudentAddmission = async (req, res) => {
    try {
        const id = req.params.id
        const data = await addmissionModel.findOne({ _id: id })
        if (!addmissionModel || addmissionModel.length === 0) {
            return res.status(404).json({ message: "Individual API data is empty" })
        };
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json(error)
    }
};

//! Delete Student Addmission Data In Admin Panel
//! -----------------------------------------
const deletelStudentAddmission = async (req, res) => {
    try {
        const id = req.params.id
        const data = await addmissionModel.deleteOne({ _id: id })
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json(error)
    }
};



//TODO ------------------------------------------------Admin Profile Crud Operations-------------------------------------------------------------

//* Get Admin Profile Data In Admin Panel
//* --------------------------------------
const getAdminProfile = async (req, res) => {
    try {
        const data = await authModel.find({})
        if (!authModel || authModel.length === 0) {
            return res.status(404).json({ message: "API is empty" })
        };
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json(error)
    }
};

//* Get Individual Admin Profile Data In Admin Panel
//* -------------------------------------------------
const getAdminProfileById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await authModel.findOne({ _id: id }, { password: 0 })
        if (!authModel || authModel.length === 0) {
            return res.status(404).json({ message: "Individual API data is empty" })
        };
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json(error)
    }
};

//TODO Get Update Admin Profile Data In Admin Panel
//TODO --------------------------------------------
const updateAdminProfileById = async (req, res) => {
    try {
        const id = req.params.id;
        const update = req.body;
        const data = await authModel.updateOne(
            { _id: id },
            {
                $set: update
            })

        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json(error)
    }
};

//! Delete Admin Profile In Admin Panel
//! -----------------------------------
const deletelAdminProfile = async (req, res) => {
    try {
        const id = req.params.id
        const data = await authModel.deleteOne({ _id: id })
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json(error)
    }
};



//TODO ------------------------------------------------Cart Review Crud Operations-------------------------------------------------------------

//* Get Cart Review In Admin Panel
//* ------------------------------
const getCartReview = async (req, res) => {
    try {
        const data = await cartReviewModel.find({})
        if (!cartReviewModel || cartReviewModel.length === 0) {
            return res.status(404).json({ message: "API is empty" })
        };
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json(error)
    }
};

//* Get Individual Cart Review In Admin Panel
//* ------------------------------------------
const getIndividualCartReview = async (req, res) => {
    try {
        const id = req.params.id
        const data = await cartReviewModel.findOne({ _id: id })
        if (!cartReviewModel || cartReviewModel.length === 0) {
            return res.status(404).json({ message: "Individual API data is empty" })
        };
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json(error)
    }
};

//TODO Get Update Cart Review In Admin Panel
//TODO -------------------------------------
const updateCartReview = async (req, res) => {
    try {
        const id = req.params.id;
        const update = req.body;
        const data = await cartReviewModel.updateOne(
            { _id: id },
            {
                $set: update
            })

        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json(error)
    }
};

//? Create Cart Review In Admin Panel
//? ---------------------------------
const createCartReview = async (req, res) => {
    try {
        const res = req.body
        const data = await cartReviewModel.insertMany(res)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json(error)
    }
};



module.exports = {
    //TODO Admin Profile Operation
    getAdminProfile,
    getAdminProfileById,
    updateAdminProfileById,
    deletelAdminProfile,

    //* Course Operation
    getAllcourse,
    getIndividualAllcourse,
    deletelAllcourse,
    updateAllcourse,
    createCourse,

    //! Event Operation
    getAllevent,
    getIndividualEvent,
    deletelEvent,
    updateEvent,
    createEvent,

    //? Computer Course Operation
    getAllComputerCourse,
    getIndividualComputerCourse,
    deletelComputerCourse,
    updateComputerCourse,
    createComputerCourse,

    //TODO Contact Form Operation
    getAllContactForm,
    getIndividualContactForm,
    deletelContactForm,

    //* Student Review Operation
    getAllstudentReview,
    getIndividualStudentReview,
    deletelStudentReview,

    //! Student Addmission Operation
    getAllstudentAddmission,
    getIndividualStudentAddmission,
    deletelStudentAddmission,

    //TODO Cart Review Operation
    getCartReview,
    getIndividualCartReview,
    updateCartReview,
    createCartReview

}