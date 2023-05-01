const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');

// @desc   Register user (receive user data from Firebase)
// @route  POST /api/users/register
// @access Public
const register = asyncHandler(async (req, res) => {
  const { uid, email, name } = req.body;

  // Handle missing fields
  if (!uid || !email || !name) {
    res.status(400).json({
      message: 'Missing fields',
    });
    throw new Error('Missing fields', 400);
  }

  // Check if user already exists
  const user = await User.findOne({ email }); //Find user by email
  if (user) {
    throw new Error('User already exists', 400);
  }

  const createdUser = await User.create({
    uid, //IMPORTANT!! Unique identifier taken from Request Body
    name,
    email,
  });

  res.status(200).json({
    message: 'Registered!',
    uid,
    name,
  });
  
});

// @desc   Login user
// @route  POST /api/users/login
// @access Public
const login = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email }); //Find user by email

  console.log(user)

  // Handle missing fields
  if (!email ) {
    throw new Error('Missing fields', 400);
  }

  // Check if user exists
  if (!user) {
    throw new Error('User does not exist', 400);
  }

  // Verify the user is the user that logged in
  if (user.uid === req.body.uid) {
    res.status(200).json({
      message: 'Logged in!',
      uid: user.uid,
      email,
    });
  } else {
    throw new Error("UID didn't match with user's UID. Denied Access.", 401);
  }
  
});

// @desc   Get user profile
// @route  GET /api/users/:id
// @access Private
const getProfile = asyncHandler(async (req, res) => {
  const id = req.params.id;

  //TODO: Get user from database (mongoDB)
  res.status(200).json({
    id,
    message: 'Get profile route',
  });
})

module.exports = {
  register,
  login,
  getProfile,
};