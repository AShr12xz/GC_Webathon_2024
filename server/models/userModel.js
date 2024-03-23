const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name!']
    },
    DOB: {
        type: Date,
        required: [false, 'Please provide your date of birth']
    },

    emailid: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    phone:{
        type: Number,
        required: [true, 'Please enter your mobile number']
    },
    role: {
        type: String,
        required: true,
        // enum: ['student', 'faculty'],
    },
    uniqueId: {
        type: String,
        required: [true, "Unique ID can't be blank"],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8,
    },

});

userSchema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password, 12);
    next();
  });

userSchema.methods.comparePassword = async function (enteredPassword, userPassword) {
    return await bcrypt.compare(enteredPassword, userPassword);
}

const User = mongoose.model('User', userSchema);

module.exports = User;  
