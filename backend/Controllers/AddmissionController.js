const addmissionFormModel = require('../Models/AddmissionForm-Model')

const postAddmissionForm = async (req, res) => {
    try {
        const response = req.body;
        const addmisssionForm = await addmissionFormModel.insertMany(response);
        return res.status(200).json({ addmisssionForm, success: true })
    } catch (error) {
        return res.status(500).json({ error, success: false})
    }
};


module.exports = { postAddmissionForm }