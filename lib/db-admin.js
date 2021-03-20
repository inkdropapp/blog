const admin = require("firebase-admin");
const { join } = require("path");
const cert =
  process.env.NODE_ENV === "production"
    ? {}
    : require("../service-account.json");

console.log("service account:", cert);

let firebaseDb = null;

export default function getDb() {
  if (firebaseDb === null) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
        ...cert,
      }),
      databaseURL: "https://dev-as-life-blog-default-rtdb.firebaseio.com",
    });

    firebaseDb = admin.database();
  }

  return firebaseDb;
}
