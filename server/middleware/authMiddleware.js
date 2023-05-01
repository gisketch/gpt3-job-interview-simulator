const admin = require('../config/firebase');

const authenticate = async (req, res, next) => {
  const token = req.header('Authorization')

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' }); // No token, authorization denied
  }

  const bearer = token.replace('Bearer ', ''); // Get token from header

  try {
    const decoded = await admin.auth().verifyIdToken(bearer); // Verify token

    req.user = decoded; // Set user to decoded token
    req.body.uid = decoded.uid;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Token is not valid' }); // Token is not valid
  }
};

module.exports = authenticate;