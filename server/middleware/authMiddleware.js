const admin = require('../config/firebase')

const authenticate = async (req, res, next) => {
  const token = req.header('Authorization')

  if (!token) {
    return res
      .status(401)
      .json({ message: 'No token, authorization denied', verified: false }) // No token, authorization denied
  }

  const bearer = token.replace('Bearer ', '') // Get token from header

  try {
    const decoded = await admin.auth().verifyIdToken(bearer) // Verify token

    req.user = decoded // Set user to decoded token
    if (req.user.picture) {
      req.picture = req.user.picture
    } else {
      req.picture = null
    }
    req.body.uid = decoded.uid
    req.verified = true
    next()
  } catch (err) {
    res.status(400).json({ message: 'Token is not valid', verified: false }) // Token is not valid
  }
}

module.exports = authenticate
