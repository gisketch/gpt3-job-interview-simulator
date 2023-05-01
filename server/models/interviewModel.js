const mongoose = require('mongoose');

const interviewSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  title: {
    type: String,
    required: [true, 'Please enter a title'],
  },
  jobPosition: {
    type: String,
    required: [true, 'Please enter a job position'],
  },
  responses: {
    type: Array,
    required: [true, 'Please enter your responses'],
  },
  reportSummary: {
    type: Object,
  }
});

module.exports = mongoose.model('Interview', interviewSchema);