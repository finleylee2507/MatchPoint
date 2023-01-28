import "./App.css";
import EventList from "./components/events/EventList";
import NavBar from "./components/Navbar";
import Landing from "./components/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuthState, useDbData } from "./utilities/firebase";
import MessageList from "./components/messages/MessageList";

const App = () => {
  const [events, eventsError] = useDbData("/events");
  const user = useAuthState();
  const [users, usersError] = useDbData("/users");

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
          path="allEvents"
          element={
            <div>
              <NavBar />
              <EventList eventData={events} user={user} allUsers={users} />
            </div>
          }
        ></Route>
        <Route
          path="Teams"
          element={
            <div>
              <NavBar />
              <TeamList />
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
