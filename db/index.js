var admin = require("firebase-admin");

var serviceAccount = require("../firebase-key.json");

admin.initializeApp({credential: admin.credential.cert(serviceAccount)});

const firestore = admin.firestore()

// const getSnapshot = async () => {
//     console.log('run db', firestore)
//     const snapshot =  await firestore.collection('bots').get()

//     console.log('snapshot',snapshot)
//     return snapshot
// }

// const db = snapshots

module.exports = firestore

// module.exports = db