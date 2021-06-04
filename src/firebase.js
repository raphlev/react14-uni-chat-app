import firebase from "firebase/app"
import "firebase/auth"

// The Firebase CLI doesn't support deployment of functions that add environment variables. 
// It doesn't matter what you have in any .env file - they simply aren't going to appear in the process environment at all after deployment.
// Declare the API keys inside initializeApp or using firebase config module
// https://stackoverflow.com/questions/65264708/firebase-initializeapp-cant-find-the-api-key-in-my-dotenv-file-next-js
export const auth = firebase.initializeApp({
	//apiKey: process.env.FIREBASE_APIKEY,
	//authDomain: process.env.FIREBASE_AUTHDOMAIN,
	//projectId: process.env.FIREBASE_PROJECTID,
	//storageBucket: process.env.FIREBASE_STORAGEBUCKET,
	//messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
	//appId: process.env.FIREBASE_APPID
	apiKey: "AIzaSyBvn6AZfYiLWgGV37CLiC6HbMEwnC77W-s",
	authDomain: "unichat-2dea8.firebaseapp.com",
	projectId: "unichat-2dea8",
	storageBucket: "unichat-2dea8.appspot.com",
	messagingSenderId: "84626442686",
	appId: "1:84626442686:web:dd8a8567d31cf3fac251ef"
}).auth()
