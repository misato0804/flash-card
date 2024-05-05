import admin from 'firebase-admin'

if (!admin.apps.length) {
  const serviceAccountJson = process.env.FIREBASE_SERVER_JSON_DATA;
  const serviceAccount = JSON.parse(serviceAccountJson!)

  admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`
  });
}

export default admin;