const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name!']
    },
    number: {
        type: Number,
        required: [true, 'Please provide your number']
    },
    DOB: {
        type: Date,
        required: [true, 'Please provide your date of birth']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    role: {
        type: String,
        enum: ['student', 'faculty'],
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8,
        select: false
    },
    // passwordConfirm: {
    //   type: String,
    //   required: [true, 'Please confirm your password'],
    //   validate: {
       
    //     validator: function(el) {
    //       return el === this.password;
    //     },
    //     message: 'Passwords are not the same!'
    //   }
    // },

});

userSchema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password, 12);
    next();
  });

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
