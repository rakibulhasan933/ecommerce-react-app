import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCJKYswzcNPZjoE0boAMphOKR3aAOcnJ0E",
	authDomain: "walker-shopping.firebaseapp.com",
	projectId: "walker-shopping",
	storageBucket: "walker-shopping.appspot.com",
	messagingSenderId: "560564681694",
	appId: "1:560564681694:web:3cb4bb7dd79e383f757b4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;