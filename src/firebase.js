// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyAtvuRR_znNr6yvTA9JMhEuxzoqLHlY3vE",
	authDomain: "heaven-in-a-jar.firebaseapp.com",
	databaseURL: "https://heaven-in-a-jar-default-rtdb.firebaseio.com",
	projectId: "heaven-in-a-jar",
	storageBucket: "heaven-in-a-jar.firebasestorage.app",
	messagingSenderId: "306165318483",
	appId: "1:306165318483:web:e33ed784fe9722efc2d7a6",
	measurementId: "G-Y73N89H56W",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, onValue };
