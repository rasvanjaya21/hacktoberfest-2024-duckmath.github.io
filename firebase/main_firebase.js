import * as firebase from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import * as gAnalytics from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import * as authentication from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import * as firestore from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { firebaseConfig } from "./private/firebase_key.js";

try {
    const app = firebase.initializeApp(firebaseConfig);
    const analytics = gAnalytics.getAnalytics(app);
    const db = firestore.getFirestore(app);
    const auth = authentication.getAuth(app)
    console.log("Firebase initialized");
}
catch (e) {
    console.log(e);
    console.log("Firebase FAILED to initialize");
}


