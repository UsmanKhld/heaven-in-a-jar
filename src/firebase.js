// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
<<<<<<< HEAD
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
=======
	apiKey: "AIzaSyAtvuRR_znNr6yvTA9JMhEuxzoqLHlY3vE",
	authDomain: "heaven-in-a-jar.firebaseapp.com",
	databaseURL: "https://heaven-in-a-jar-default-rtdb.firebaseio.com",
	projectId: "heaven-in-a-jar",
	storageBucket: "heaven-in-a-jar.firebasestorage.app",
	messagingSenderId: "306165318483",
	appId: "1:306165318483:web:e33ed784fe9722efc2d7a6",
	measurementId: "G-Y73N89H56W",
>>>>>>> b5be9c86768abdf94819acbca7b70f4fb87e2caf
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, onValue };
