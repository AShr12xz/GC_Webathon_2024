const Feedback= require("../models/feedbackModel")
const asyncCheck = require("../utils/asyncCheck");

exports.submitFeedback = asyncCheck(async (req, res, next) => {
    const {rollno, feedback, facultycode} = req.body;
    const feedbackarray=await Feedback.find(item=>item.rollno===rollno);
    const existingfeedback= feedbackarray.find(item=>item.facultycode===facultycode);
    if(existingfeedback){
        return res.json({ message: "Feedback already submitted" });
    }
    const data=await Feedback.create({rollno,feedback,facultycode});
    res.status(201).json({
      status: "success",
      data: {
        feedback: data,
      },
    });
});