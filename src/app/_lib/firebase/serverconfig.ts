import admin from 'firebase-admin'

if (!admin.apps.length) {
  const serviceAccount = require('../firebase/flash-card-59f1f-firebase-adminsdk-5jui5-21c89598f0.json');

  admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`
  });
}

export default admin;