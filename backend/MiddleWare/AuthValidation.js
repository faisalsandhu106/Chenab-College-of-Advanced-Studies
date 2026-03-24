const joi = require('joi');

//TODO ------------------------------
//* Admin SignUp Validation
const signupValidation = (req, res, next) => {
    const Schema = joi.object({
        firstName: joi.string().required(),
        lastName: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().min(6).max(20).required(),
    });

    const { error } = Schema.validate(req.body);

    if (error) {
        return res.status(404).json({ message: 'password length must be at least 6 characters', error })
    };

    next();
};

//TODO ------------------------------
//* Admin Login Validation
const loginValidation = (req, res, next) => {
    const Schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(6).max(20).required(),
    });

    const { error } = Schema.validate(req.body);

    if (error) {
        return res.status(404).json({ message: 'Incorrect your email & password', error })
    };

    next();
};


module.exports = { signupValidation, loginValidation }

