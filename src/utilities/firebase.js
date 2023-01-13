// Firebase functionality goes here

// Import the functions you need from the SDKs you need
import { useCallback, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, update } from "firebase/database";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

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

// I will add more functions here to add and update the database

export const signInWithGoogle = () => {
  signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};

const firebaseSignOut = () => signOut(getAuth(firebase));

export { firebaseSignOut as signOut };

export const useAuthState = () => {
  const [user, setUser] = useState();

  useEffect(() => onAuthStateChanged(getAuth(firebase), setUser), []);

  return user;
};
