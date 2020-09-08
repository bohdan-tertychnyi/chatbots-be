var admin = require("firebase-admin");

var serviceAccount = require("../../firebase-key.json");

admin.initializeApp({credential: admin.credential.cert(serviceAccount)});

const firestore = admin.firestore()

module.exports = firestore
