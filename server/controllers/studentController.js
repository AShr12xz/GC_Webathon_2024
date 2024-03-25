const asyncCheck = require('../utils/asyncCheck')
const Faculty = require('../models/facultyModel')
const Student = require('../models/studentModel')


const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (!allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.updateStudent = asyncCheck(async (req, res, next) => {
  const filteredBody = filterObj(req.body, 'uniqueId', 'password');
  const updatedUser = await Faculty.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser
    }
  });
})

exports.getStudentProfile = asyncCheck(async (req, res, next) => {
  console.log(req.body);
  const user = await Student.findOne({ uniqueId: req.body.rollno });
  console.log(user);
  res.status(200).json({
    status: 'success',
    data: {
      user
    }
  });
})
