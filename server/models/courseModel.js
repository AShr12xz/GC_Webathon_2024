const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Course name is required']
    },
    code: {
        type: String,
        required: [true, 'Course code is required']
    },
    faculty: {
        type: String,
        required: [true, 'Faculty is required']
    },
    credits: {
        type: Number,
        required: [true, 'Credits are required']
    },
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;