const asyncCheck = require('../utils/asyncCheck')

const filterObj = (obj, ...allowedFields) => {
    const newObj = {};
    Object.keys(obj).forEach(el => {
      if (!allowedFields.includes(el)) newObj[el] = obj[el];
    });
    return newObj;
  };

exports.updateStudent = asyncCheck(async(req,res,next) => {
    const filteredBody = filterObj(req.body, 'uniqueId', 'password');
    const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
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
