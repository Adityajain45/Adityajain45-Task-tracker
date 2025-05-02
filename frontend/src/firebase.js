// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: "task-manager-c9dda.firebaseapp.com",
//   projectId: "task-manager-c9dda",
//   storageBucket: "task-manager-c9dda.appspot.com",
//   messagingSenderId: "252343493674",
//   appId: "1:252343493674:web:15f42600d70c7ce99e8f53",
// };

// Initialize Firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "USE YOUR FIREBASE API KEY",
  authDomain: "task-manager-2c7e3.firebaseapp.com",
  projectId: "task-manager-2c7e3",
  storageBucket: "task-manager-2c7e3.firebasestorage.app",
  messagingSenderId: "583573297744",
  appId: "1:583573297744:web:7ee4b482099f904fa38f55",
  measurementId: "G-G58FR78581"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
// export const app = initializeApp(firebaseConfig);
