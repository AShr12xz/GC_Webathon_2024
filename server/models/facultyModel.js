const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please tell us your name!"],
    },
    DOB: {
        type: Date,
        required: [false, "Please provide your date of birth"],
    },
    email: {
        type: String,
        required: [true, "Please provide your email"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    phone: {
        type: Number,
        required: [true, "Please enter your mobile number"],
    },
    role: {
        type: String,
        required: true,
        // enum: ['student', 'faculty'],
    },
    uniqueId: {
        type: String,
        required: [true, "Unique ID can't be blank"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: 8,
    },
    father: {
        type: String,
        required: false
    },
    mother: {
        type: String,
        required: false
    },
    marital: {
        type: String,
        enum: ['married', 'unmarried']
    },
    Gender: {
        type: String,
        required: false
    },
    state: {
        type: String,
    },
    country: {
        type: String
    },
    address: {
        type: String,
        required: false
    },
    
})

facultySchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;