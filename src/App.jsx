import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useAuthState, useDbData } from "./utilities/firebase";

import "./App.css";

import EventList from "./components/events/EventList";
import NavBar from "./components/Navbar";
import Landing from "./components/Landing";
import MessageList from "./components/messages/MessageList";
import Profile from "./components/user/Profile";

// The initial rendering of our application.
const App = () => {
  // Get the logged in user
  // const user = useAuthState();

  // CHANGE UID AND DISPLAYNAME FOR CYPRESS TESTS
  // const user = {
  //   uid: "Faztbt70x8bKPMV3rJzco7fVvEr2",
  //   displayName: "Vedant Apte",
  //   photoURL: "",
  // };
  const user = useAuthState();
  // const user=null;

  // Get the data from each table in the database, and print errors if any
  const [events, eventsError] = useDbData("/events");
  const [users, usersError] = useDbData("/users");
  const [messages, messagesError] = useDbData("/messages");

  if (user) {
    console.log("Users are");
    console.log(users);
    console.log("Messages are");
    console.log(messages);
  }

  if (eventsError) {
    console.log(eventsError);
  } else if (usersError) {
    console.log(usersError);
  } else if (messagesError) {
    console.log(messagesError);
  }

  // Set the number of unread messages for the logged in user, to populate the Navbar
  const [numberOfUnread, setNumberOfUnread] = useState(0);
  useEffect(() => {
    if (user && users) {
      if (users[user.uid]) {
        if (users[user.uid]["unreadMessages"]) {
          setNumberOfUnread(users[user.uid]["unreadMessages"].length);
        }
      }
    }
  });

  // Establish routes for the different screens on our web app
  return (
    <BrowserRouter>
      <Routes>
        <Route // The landing page of our application
          path="/"
          element={
            <div>
              <Landing allUsers={users} />
            </div>
          }
        ></Route>
        <Route // The page with all events
          path="/allEvents"
          element={
            <div>
              <NavBar numberOfUnread={numberOfUnread} />
              <EventList eventData={events} user={user} allUsers={users} />
            </div>
          }
        ></Route>
        <Route // The page with the user's personal info and events they are a part of
          path="/profile"
          element={
            <div>
              <NavBar numberOfUnread={numberOfUnread} />
              <Profile allUsers={users} user={user} allEvents={events} />
            </div>
          }
        ></Route>
        <Route // The page with all the user's notifications
          path="/inbox"
          element={
            <div>
              <NavBar numberOfUnread={numberOfUnread} />
              <MessageList
                allUsers={users}
                user={user}
                allMessages={messages}
              />
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
