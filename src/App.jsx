import "./App.css";
import EventList from "./components/events/EventList";
import NavBar from "./components/Navbar";
import Landing from "./components/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuthState } from "./utilities/firebase";
import TeamList from "./components/teams/TeamList";

const App = () => {
  const user = useAuthState();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Landing />
            </div>
          }
        ></Route>
        <Route
          path="allEvents"
          element={
            <div>
              <NavBar />
              <EventList />
            </div>
          }
        ></Route>
        <Route 
          path="Teams"
          element={<TeamList/>}>


        </Route>
      </Routes>
    </BrowserRouter>
  );
  // <div className="App">
  //   <NavBar />
  //   <EventList />
  // </div>
  //   );
};

export default App;
