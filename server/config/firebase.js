const admin = require('firebase-admin');// Firebase Admin SDK
const serviceAccount = require('../secret/serviceAccountKey.json'); // Service Account Key

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
