import "infra/firebase/analytics";
import "infra/firebase/auth";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC_s9ppjxO-tY5h2grraH9uI7yOWFSFTFM",
  authDomain: "with-stress.firebaseapp.com",
  databaseURL: "https://with-stress.firebaseio.com",
  projectId: "with-stress",
  storageBucket: "with-stress.appspot.com",
  messagingSenderId: "346960020941",
  appId: "1:346960020941:web:503240d118103224ebf084",
  measurementId: "G-5WNW30VLEP",
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
