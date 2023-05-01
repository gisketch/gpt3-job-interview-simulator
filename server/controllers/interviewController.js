const asyncHandler = require('express-async-handler');
const Interview = require('../models/interviewModel');
const User = require('../models/userModel');

// @desc   Add an interview to the user
// @route  POST /api/interviews
// @access Private

const addInterview = asyncHandler(async (req, res) => {
  const { title, jobPosition, responses, reportSummary } = req.body;

  // Handle missing fields
  if (!title || !jobPosition || !responses || !reportSummary) {
    res.status(400)
    throw new Error('Missing fields', 400);
  }

  try {
    //find user by uid
    const user = await User.findOne({ uid: req.user.uid });

    const createdInterview = await Interview.create({
      user: user._id,
      title,
      jobPosition,
      responses,
      reportSummary,
    });

    user.interviews.push(createdInterview._id);
    await user.save();
  
    res.status(200).json({
      message: 'Interview added!',
      interview: title,
    });

  } catch (error) {
    res.status(400)
    console.log(error)
    throw new Error ('Error adding interview', 400)
  }

});

// @desc   Get all interviews for a user
// @route  GET /api/interviews
// @access Private

const getInterviews = asyncHandler(async (req, res) => {
  try {
    //find user by uid
    const user = await User.findOne({ uid: req.user.uid });

    const interviews = await User.findById(user._id).populate('interviews');
    res.json(interviews);
  } catch (error) {
    res.status(400)
    throw new Error ('Error getting interviews', 400)
  }
});

// @desc   Delete an interview
// @route  DELETE /api/interviews/:id
// @access Private

const deleteInterview = asyncHandler(async (req, res) => {
  try {
    //if interview user id matches user id, delete interview
    const user = await User.findOne({ uid: req.user.uid });
    const interview = await Interview.findById(req.params.id);

    if (interview.user.toString() !== user._id.toString()) {
      res.status(401)
      throw new Error('Not authorized', 401)
    }

    if (interview) {
      await interview.deleteOne();
      res.json({ message: 'Interview removed' });
    } else {
      res.status(404)
      throw new Error('Interview not found', 404)
    }
  } catch (error) {
    res.status(400)
    console.log(error)
    throw new Error ('Error deleting interview', 400)
  }
});

module.exports = {
  addInterview,
  getInterviews,
  deleteInterview,
}
