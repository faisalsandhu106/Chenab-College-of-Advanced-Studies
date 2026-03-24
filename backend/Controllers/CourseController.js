const courseModel = require('../Models/Course-Model')
const ITcourseScheme = require('../Models/ITCourse-Model')

const getCourse = async (req, res) => {
    try {
        const { _id, title, category, feature } = req.query;
        const queryObject = {};

        // React Query Searching in API Name, company, feature 
        if (_id) {
            queryObject._id = _id
        };

        if (title) {
            queryObject.title = { $regex: title, $options: "i" }
        };

        if (category) {
            queryObject.category = { $regex: category, $options: "i" }
        };

        if (feature) {
            queryObject.feature = feature
        };

        const course = await courseModel.find(queryObject);
        res.status(200).json({ course });
    } catch (error) {
        res.status(400).json({ message: "Get All Course Error In Controller", error })
    }
};

const getIndividualCourse = async (req, res) => {
    try {
        const id = req.params.id;
        const CourseData = await courseModel.findOne({ _id: id })
        return res.status(200).json(CourseData)
    } catch (error) {
        return res.status(404).json({ message: "Individual Data Error", error });
    }
}


const getITCourse = async (req, res) => {
    try {
        const course = await ITcourseScheme.find();
        res.status(200).json({ course });
    } catch (error) {
        res.status(400).json({ message: "Get All ITCourse Error In Controller", error })
    }
};

const getIndividualITCourse = async (req, res) => {
    try {
        const id = req.params.id;
        const ITCourseData = await ITcourseScheme.findOne({ _id: id })
        return res.status(200).json(ITCourseData)
    } catch (error) {
        return res.status(404).json({ message: "Individual Data Error", error });
    }
}


module.exports = { getCourse, getIndividualCourse, getITCourse, getIndividualITCourse }