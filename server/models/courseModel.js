const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Course name is required']
    },
    coursecode: {
        type: String,
        required: [true, 'Course code is required'],
        unique: true
    },
    faculty: {
        type: String,
        required: [true, 'Faculty is required']
    },
    facultycode: {
        type: String,
        required: [true, 'Faculty code is required']
    },
    credits: {
        type: Number,
        required: [true, 'Credits are required']
    },
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;