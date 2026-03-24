const eventModel = require('../Models/Event-Model');

//* Get All Events API Data
//* -----------------------
const getEventData = async (req, res) => {
    try {
        const { _id, eventTitle, eventType, future } = req.query;
        const queryObject = {};

        // React Query Searching in API eventTitle, year, future 
        if (_id) {
            queryObject._id = _id
        };

        if (eventTitle) {
            queryObject.eventTitle = { $regex: eventTitle, $options: "i" }
        };

        if (eventType) {
            queryObject.eventType = { $regex: eventType, $options: "i" }
        };

        if (future) {
            queryObject.future = future
        };

        const events = await eventModel.find(queryObject);
        res.status(200).json({ events });
    } catch (error) {
        res.status(400).json({ message: "Get All events Error In Controller", error })
    }
};


//* Get Individual Event Data
//* -------------------------
const getIndividualEvent = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await eventModel.findOne({ _id: id })
        return res.status(200).json(data)

    } catch (error) {
        return res.status(404).json({ message: "Individual Data Error", error });
    }
};

module.exports = { getEventData, getIndividualEvent }