const jwt = require('jsonwebtoken');
const User = require('../models/userModel')
const Student = require('../models/studentModel')
const Faculty = require('../models/facultyModel')
const error = require('../utils/error')
const asyncCheck = require('../utils/asyncCheck')
require("dotenv").config();

const signToken = (id, user = 'student') => {
    return jwt.sign({ id, user }, process.env.JWT_SECRET, {
        expiresIn: '90d'
    });
};

exports.fetchData = async (req, res) => {
  const user = await User.find();
  return res.json({ user });
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

module.exports.userVerification = (req, res) => {
  const { token } = req.body;
  console.log(token);
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await User.findById(data.id);
      if (user)
        return res.json({
          status: true,
          user: user,
        });
      else return res.json({ status: false });
    }
  });
};
