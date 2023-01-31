import { useEffect, useState } from "react";

// Import Firebase SDK functions
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

// Firebase configuration dsata
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

// HOLISTIC DATABASE FUNCTIONS

// Clear entire database of all unessential fields
export const clearDatabase = () => {
  console.log("Clearing database");

  const data = {
    messages: {
      welcome: {
        id: "welcome",
        title: "Welcome to MatchPoint",
        content:
          "Welcome to MatchPoint! MatchPoint lets you seamlessly find open sporting events and sign up for them, allowing you to enjoy your favorite sports activities. Head over to the 'All Events' page now to see what's happening!",
      },
    },
    users: {
      0: "Initialize",
    },
  };

  // Update messages and users tables in database with above data
  update(ref(database), data);

  // Remove events table all together
  const eventsRef = child(ref(database), "/events");
  remove(eventsRef);
};

// Get data from a specific path in the entire database
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

// USER FUNCTIONALITY

// Add a new user to the users table in the database
export const addNewUser = (newUser, uid) => {
  set(ref(database, "users/" + uid), newUser);
};

// Delete an event from each of its participants' list of events
export const deleteEventFromUsers = async (listOfUserIds, listOfNewEvents) => {
  let isDeleteSuccessful = true;

  // Iterate over user list
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

// EVENT FUNCTIONALITY

// Generate a unique ID for a new event, add it to the DB, and return it
export const getNewEventKey = () => {
  const eventKey = push(child(ref(database), "events"));
  return eventKey.key;
};

// Add new event to the events table in the database
// Add the current event to the creator's list of events
export const addNewEvent = (newEvent, eid, updatedUserEvents, uid) => {
  set(ref(database, "events/" + eid), newEvent);

  const userEventsRef = child(ref(database), `users/${uid}`);
  update(userEventsRef, updatedUserEvents); // add event to user's list of events
};

// Delete a specific event from the events table in the database
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

// Add the joining user to the list of participants for the eventj
// Add the event to the joining user's list of participants
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
    await update(participantsRef, updatedParticipants);
    await update(userEventsRef, updatedUserEvents);
    isJoinSuccessful = true;
  } catch (error) {
    console.log(error);
  }

  return isJoinSuccessful;
};

// Update a specific event in the events table in the database
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

// MESSAGES FUNCTIONALITY

// Generate a unique ID for a new message, add it to the DB, and return it
export const getNewMessageKey = () => {
  const messageKey = push(child(ref(database), "messages"));
  return messageKey.key;
};

// Add a new message to the messages table upon event creation
// Add this message to the event creator's list of messages
export const createEventMessage = (newUserMessage, newMessage, mid, uid) => {
  set(ref(database, "messages/" + mid), newMessage);

  const userUnreadMessagesRef = child(ref(database), `users/${uid}`);
  update(userUnreadMessagesRef, newUserMessage);
};

// Add a new message to the messages table upon event deletion
// Add this message to the list of messages for all participants of the deleted event
export const deleteEventMessage = (
  newMessage,
  updatedParticipantsMessages,
  participants,
  mid
) => {
  set(ref(database, "messages/" + mid), newMessage);

  for (let participant of participants) {
    let i = participants.indexOf(participant);
    const userUnreadMessagesRef = child(ref(database), `users/${participant}`);
    update(userUnreadMessagesRef, updatedParticipantsMessages[i]);
  }
};

// Add a new message to the message table upon a user joining or leaving an event
// Add this message to the list of messages for the event creator
// Add this message to the list of messages for the event joiner/leaver
export const joinLeaveEventMessage = (
  newMessage,
  ownerUnreadMessages,
  userUnreadMessages,
  mid,
  oid,
  uid
) => {
  try {
    set(ref(database, "messages/" + mid), newMessage);

    const ownerUnreadMessagesRef = child(ref(database), `users/${oid}`);
    update(ownerUnreadMessagesRef, ownerUnreadMessages);

    const userUnreadMessagesRef = child(ref(database), `users/${uid}`);
    update(userUnreadMessagesRef, userUnreadMessages);
  } catch (error) {
    console.log("Error in join event message");
    console.log(error);
  }
};

// Update the lists of read and unread messages for the given user
export const updateReadAndUnreadMessages = (newMessageData, uid) => {
  const userRef = child(ref(database), `users/${uid}`);
  update(userRef, newMessageData);
};

// FILE FUNCTIONALITY

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

// Open Google sign in popup and sign in the user
export const signInWithGoogle = () => {
  signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};

// Sign out the user
const firebaseSignOut = () => signOut(getAuth(firebase));
export { firebaseSignOut as signOut };

// Get the authentication state of the user (is the user signed in or not)
// If user is signed in, return value is a Google user object (console.log to see all)
export const useAuthState = () => {
  const [user, setUser] = useState();

  useEffect(() => onAuthStateChanged(getAuth(firebase), setUser), []);

  return user;
};
