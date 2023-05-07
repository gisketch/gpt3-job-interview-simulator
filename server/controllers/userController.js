const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')

// @desc   Register user (receive user data from Firebase)
// @route  POST /api/users/register
// @access Public
const register = asyncHandler(async (req, res) => {
  const { uid, email, name } = req.body

  //TODO: if picture == null, save random pic else use req.picture
  let photoURL = null
  if (req.picture === null) {
    //save random pic
    console.log('no pic, randomizing')
  } else {
    photoURL = req.picture
  }

  // Handle missing fields
  if (!uid || !email || !name) {
    res.status(400).json({
      message: 'Missing fields',
    })
    throw new Error('Missing fields', 400)
  }

  // Check if user already exists
  const user = await User.findOne({ email }) //Find user by email
  if (user) {
    throw new Error('User already exists', 400)
  }

  const createdUser = await User.create({
    uid, //IMPORTANT!! Unique identifier taken from Request Body
    name,
    email,
    photoURL,
  })

  console.log(createdUser)

  res.status(200).json({
    message: 'Registered!',
    uid,
    name,
    photoURL,
  })

  console.log(`Registered ${name}`)
})

// @desc   Login user
// @route  POST /api/users/login
// @access Public
const login = asyncHandler(async (req, res) => {
  const { email } = req.body

  const user = await User.findOne({ email }) //Find user by email

  // Handle missing fields
  if (!email) {
    throw new Error('Missing fields', 400)
  }

  // Check if user exists
  if (!user) {
    throw new Error('User does not exist', 400)
  }

  // Verify the user is the user that logged in
  if (user.uid === req.body.uid) {
    res.status(200).json({
      message: 'Logged in!',
      uid: user.uid,
      email,
      photoURL,
    })
    console.log(`${email} logged in!`)
  } else {
    throw new Error("UID didn't match with user's UID. Denied Access.", 401)
  }
})

// @desc   Get user profile
// @route  GET /api/users/:id
// @access Private
const getProfile = asyncHandler(async (req, res) => {
  const uid = req.params.id

  try {
    const user = await User.findOne({ uid }) //Find user by email
    if (user) {
      res.status(200).json({
        user,
        registered: true,
      })
    } else {
      res.status(200).json({
        uid,
        registered: false,
      })
    }
  } catch (error) {
    throw new Error('Error fetching profile', 400)
  }
})

// @desc   Check verification
// @route  GET /api/users/verify
// @access Public
const verify = asyncHandler(async (req, res) => {
  const uid = req.body.uid
  const user = await User.findOne({ uid })

  try {
    if (user) {
      res.status(200).json({
        message: 'Token is verified!',
        verified: true,
        uid,
      })
    } else {
      throw new Error('Cannot verify user, user not in database!', 400)
    }
  } catch (error) {
    console.log(error)
    throw new Error('Cannot verify user', 400)
  }
})

module.exports = {
  register,
  login,
  getProfile,
  verify,
}
