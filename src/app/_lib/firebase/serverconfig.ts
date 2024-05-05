import admin from 'firebase-admin'

if (!admin.apps.length) {
  const serviceAccount = require('../firebase/firebase_server.json');

  admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`
  });
}

export default admin;