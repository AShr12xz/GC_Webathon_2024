const jwt = require('jsonwebtoken');
const User = require('../models/userModel')
const error = require('../utils/error')
const asyncCheck = require('../utils/asyncCheck')

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '90d'
    });
};

exports.signup = asyncCheck(async (req, res, next) => {
    

    if(req.body.role === 'faculty')
    {
        if(req.body.code != 'abcd')
        {
            return next(new error('Wrong faculty code', 401))
        }
    }

    const newUser = await User.create(req.body);

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
    if(!user || !await user.comparePassword(password,user.password))
    {
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