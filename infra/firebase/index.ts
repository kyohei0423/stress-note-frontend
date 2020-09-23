import "firebase/analytics";
import "firebase/auth";
import firebase from "firebase/app";

const firebaseConfig = {
};

let firebaseApp: firebase.app.App;

const getFirebaseApp = () => {
  if (firebase.apps.length > 0) {
    return firebaseApp;
  }
  firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  return firebaseApp;
};

export const getFirebaseAuth = () => {
  return getFirebaseApp().auth();
};
