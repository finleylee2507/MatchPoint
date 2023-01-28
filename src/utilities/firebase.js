// Firebase functionality goes here

// Import the functions you need from the SDKs you need
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  child,
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref as sRef,
  uploadBytes,
} from "firebase/storage";

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
  // console.log("Fetching data");
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
export const addNewEvent = (newEvent, eid, updatedUserEvents, uid) => {
  set(ref(database, "events/" + eid), newEvent);

  const userEventsRef = child(ref(database), `users/${uid}`);
  update(userEventsRef, updatedUserEvents); // add event to user's list of events
};

export const createEventMessage = (newUserMessage, newMessage, mid, uid) => {
  set(ref(database, "messages/" + mid), newMessage);
  const userUnreadMessagesRef = child(ref(database), `users/${uid}`);
  update(userUnreadMessagesRef, newUserMessage);
};

export const joinEventMessage = (
  newMessage,
  ownerUnreadMessages,
  userUnreadMessages,
  mid,
  oid,
  uid
) => {
  try {
    set(ref(database, "messages/" + mid), newMessage); // add to general messages table

    const ownerUnreadMessagesRef = child(ref(database), `users/${oid}`);
    update(ownerUnreadMessagesRef, ownerUnreadMessages); // updates owners unread messages

    const userUnreadMessagesRef = child(ref(database), `users/${uid}`);
    update(userUnreadMessagesRef, userUnreadMessages); // updates users unread messages
  } catch (error) {
    console.log("Error in join event message");
    console.log(error);
  }
};

export const deleteEvent = async (eid) => {
  let isSuccessful = false;
  try {
    await remove(ref(database, "events/" + eid));
    isSuccessful = true;
  } catch (error) {
    console.log(error);
  }

  return isSuccessful;
};

// Join an event
export const joinEvent = async (
  updatedParticipants,
  updatedUserEvents,
  ueid,
  uid
) => {
  const participantsRef = child(ref(database), `events/${ueid}`);
  const userEventsRef = child(ref(database), `users/${uid}`);

  let isJoinSuccessful = false;
  try {
    await update(participantsRef, updatedParticipants); // join event
    await update(userEventsRef, updatedUserEvents); // add event to user's list of events

    isJoinSuccessful = true;
  } catch (error) {
    console.log(error);
  }

  return isJoinSuccessful;
};

export const deleteEventFromUsers = async (listOfUserIds, listOfNewEvents) => {
  let isDeleteSuccessful = true;
  //iterate over user list
  for (const uid of listOfUserIds) {
    const i = listOfUserIds.indexOf(uid);
    const userEventsRef = child(ref(database), `users/${uid}`);

    try {
      await update(userEventsRef, listOfNewEvents[i]);
    } catch (error) {
      console.log(error);
      isDeleteSuccessful = false;
    }
  }

  return isDeleteSuccessful;
};
// //Update an event
export const updateEvent = async (newEvent, eid) => {
  const eventRef = child(ref(database), `events/${eid}`);
  let isUpdateSuccessful = false;
  try {
    await update(eventRef, newEvent);
    isUpdateSuccessful = true;
  } catch (error) {
    console.log(error);
  }

  return isUpdateSuccessful;
};

// Get new event key
export const getNewEventKey = () => {
  const eventKey = push(child(ref(database), "events"));
  return eventKey.key;
};

export const getNewMessageKey = () => {
  const messageKey = push(child(ref(database), "messages"));
  return messageKey.key;
};

export const uploadFile = async (file) => {
  let fileLink = `images/${file.name}`;
  let downloadURL = "";
  let isSuccessful = false;
  const imageReference = sRef(storage, fileLink);

  try {
    await uploadBytes(imageReference, file);
    downloadURL = await getDownloadURL(imageReference);
    console.log("File upload successful");
    isSuccessful = true;
  } catch (err) {
    console.log("Error: " + err);
  }

  return [isSuccessful, downloadURL];
};

export const deleteFile = async (url) => {
  let fileRef = sRef(storage, url);
  try {
    let deleteResult = await deleteObject(fileRef);
    console.log(deleteResult);
  } catch (error) {
    console.log(error);
  }
};

export const getImageLinkOfExistingImage = async (imageFileName) => {
  let fileLink = `images/${imageFileName}`;
  let imageLink = "";
  const imageReference = sRef(storage, fileLink);
  try {
    imageLink = await getDownloadURL(imageReference);
  } catch (err) {
    console.log(err);
  }

  return imageLink;
};
/* USER AUTHENTICATION FUNCTIONS */

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
