import admin from "firebase-admin";

function getServiceAccount() {
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error("Missing Firebase Admin credentials. Set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY.");
  }

  return { projectId, clientEmail, privateKey };
}

export function getAdminApp() {
  if (admin.apps.length) return admin.app();
  return admin.initializeApp({ credential: admin.credential.cert(getServiceAccount()) });
}

export function getAdminDb() {
  return getAdminApp().firestore();
}

export default admin;
