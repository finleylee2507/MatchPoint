import "./App.css";
import EventList from "./components/events/EventList";
import NavBar from "./components/Navbar";
import Landing from "./components/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuthState, useDbData } from "./utilities/firebase";
import MessageList from "./components/messages/MessageList";
import Profile from "./components/user/Profile";

const App = () => {
  const [events, eventsError] = useDbData("/events");
  const user = useAuthState();
  const [users, usersError] = useDbData("/users");
  const [messages, messagesError] = useDbData("/messages");
  console.log("User: ", user);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Landing allUsers={users} />
            </div>
          }
        ></Route>
        <Route
          path="/allEvents"
          element={
            <div>
              <NavBar />
              <EventList eventData={events} user={user} allUsers={users} />
            </div>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <div>
              <NavBar />
              <Profile allUsers={users} user={user} allEvents={events} />
            </div>
          }
        ></Route>
        <Route
          path="/inbox"
          element={
            <div>
              <NavBar />
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
