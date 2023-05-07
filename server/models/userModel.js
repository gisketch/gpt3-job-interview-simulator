const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  uid: {
    type: String,
    required: [true, 'Please enter your uid'],
    unique: true,
  },
  name: {
    type: String,
    required: [true, 'Please enter your name'],
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
  },
  photoURL: {
    type: String,
  },
  interviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Interview',
    },
  ],
})

module.exports = mongoose.model('User', userSchema)
