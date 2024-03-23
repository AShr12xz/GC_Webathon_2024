const jwt = require('jsonwebtoken');
const User = require('../models/userModel')
const Student = require('../models/studentModel')
const Faculty = require('../models/facultyModel')
const error = require('../utils/error')
const asyncCheck = require('../utils/asyncCheck')

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '90d'
    });
};

exports.signup = asyncCheck(async (req, res, next) => {
    if (req.body.role === 'faculty') {
        if (req.body.code != 'abcd') {
            return next(new error('Wrong faculty code', 401))
        }
    }
    const filteredBody = { ...req.body };
    delete filteredBody.code;
    console.log(filteredBody);

    if (req.body.role === 'student') {
        const newStudent = await Student.create(filteredBody);
    }
    else {
        const newFaculty = await Faculty.create(filteredBody)
    }

    const newUser = await User.create(filteredBody);

    const token = signToken(newUser._id);

    res.status(201).json({
        status: 'success',
        token,
        data: {
            user: newUser
        }
    });
})

exports.login = asyncCheck(async (req, res, next) => {

    const { uniqueId, password } = req.body;
    if (!uniqueId || !password)
        return next(new error("All fields are required", 400));

    const user = await User.findOne({ uniqueId });
    if (!user || !await user.comparePassword(password, user.password)) {
        return next(new error("Incorrect email or password", 401));
    }

    const token = signToken(user._id);

    res.status(200).json({
        status: 'success',
        token,
        data: {
            user: user
        }
    });
})

exports.protect = asyncCheck(async (req, res, next) => {
    // 1) Getting token and check of it's there
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return next(
            new AppError('You are not logged in! Please log in to get access.', 401)
        );
    }

    // 2) Verification token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // 3) Check if user still exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
        return next(
            new AppError(
                'The user belonging to this token does no longer exist.',
                401
            )
        );
    }
})
