// Firebase functionality goes here

// Import the functions you need from the SDKs you need
import {useEffect, useState} from "react";
import {initializeApp} from "firebase/app";
import {getDatabase, onValue, push, ref, set,child} from "firebase/database";
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut,} from "firebase/auth";
import {getDownloadURL, getStorage, ref as sRef, uploadBytes} from "firebase/storage";

// Configuration Data
const firebaseConfig = {
    apiKey: "AIzaSyD0rTZHHcGBphDZed-iv-N3QCmvkOKo7To",
    authDomain: "matchpoint-9d3b2.firebaseapp.com",
    databaseURL: "https://matchpoint-9d3b2-default-rtdb.firebaseio.com",
    projectId: "matchpoint-9d3b2",
    storageBucket: "matchpoint-9d3b2.appspot.com",
    messagingSenderId: "915139787408",
    appId: "1:915139787408:web:7b2007d60a631c4e0db615",
    measurementId: "G-E8N9D91SFJ",
};

// Initialize Firebase and database
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);
const storage = getStorage();

/* DATABASE FUNCTIONS */

// Use this function to get data from a path
export const useDbData = (path) => {
    const [data, setData] = useState();
    const [error, setError] = useState(null);

    useEffect(
        () =>
            onValue(
                ref(database, path),
                (snapshot) => {
                    setData(snapshot.val());
                },
                (error) => {
                    setError(error);
                }
            ),
        [path]
    );

    return [data, error];
};

// Add user to database
export const addNewUser = (newUser, uid) => {
    set(ref(database, "users/" + uid), newUser);
};

//Add new event to database
export const addNewEvent = (newEvent, eid) => {
    set(ref(database, "events/" + eid), newEvent);
};

// Get new event key
export const getNewEventKey = () => {
    const eventKey = push(child(ref(database),"events"));
    return eventKey.key;
};

//not sure it will work
export const uploadFile = async (file) => {
    let fileLink = `images/${file.name}`;
    let downloadURL = "";
    let isSuccessful = false;
    const imageReference = sRef(storage, fileLink);


    try {
        await uploadBytes(imageReference, file);
        downloadURL = await getDownloadURL(imageReference);
        console.log('File upload successful');
        isSuccessful = true;
    } catch (err) {
        console.log("Error: " + err);
    }


    return [isSuccessful, downloadURL];

};
/* USER AUTHENTICATION FUNCTIONS */

export const signInWithGoogle = () => {
    signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};

const firebaseSignOut = () => signOut(getAuth(firebase));

export {firebaseSignOut as signOut};

export const useAuthState = () => {
    const [user, setUser] = useState();

    useEffect(() => onAuthStateChanged(getAuth(firebase), setUser), []);

    return user;
};
