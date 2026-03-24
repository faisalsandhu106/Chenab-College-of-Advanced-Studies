const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authModel = require('../Models/Auth-Model');

//TODO ------------------------------
// * Admin SignUp
const signUp = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const existAdmin = await authModel.findOne({ email });
        if (existAdmin) {
            return res.status(409).json({ message: 'User already exists, Please Login', success: false })
        };

        const AuthModel = new authModel({ firstName, lastName, email, password });
        AuthModel.password = await bcrypt.hash(password, 10);

        const jwtToken = jwt.sign(
            { email: AuthModel.email, _id: AuthModel._id },
            process.env.JWT_TOKEN,
            { expiresIn: '24' }
        );

        res.status(200).json({
            message: "Admin Registered Successfully",
            success: true,
            jwtToken,
            email,
            _id: AuthModel._id
        });

        await AuthModel.save();

    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', success: false })
    }
};


//TODO ------------------------------
// * Admin Login
const login = async (req, res) => {
    try {
        const error = 'Auth failed email or password incorrect';
        const { email, password } = req.body;
        const existAdmin = await authModel.findOne({ email });
        if (!existAdmin) {
            return res.status(404).json({ message: error, success: false })
        };

        const checkPassword = await bcrypt.compare(password, existAdmin.password)
        if (!checkPassword) {
            return res.status(404).json({ message: error, success: false })
        };

        const jwtToken = jwt.sign(
            { email: existAdmin.email, _id: existAdmin._id },
            process.env.JWT_TOKEN,
            { expiresIn: '24' }
        );

        res.status(200).json({
            message: "Login Successfully",
            success: true,
            jwtToken,
            email,
            _id: existAdmin._id
        });

    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', success: false })
    }
};



module.exports = { signUp, login }