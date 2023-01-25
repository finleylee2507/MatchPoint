import "./App.css";
import EventList from "./components/events/EventList";
import NavBar from "./components/Navbar";
import Landing from "./components/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuthState, useDbData } from "./utilities/firebase";
import TeamList from "./components/teams/TeamList";
import Profile from "./components/user/Profile";

const App = () => {
    const [events, eventsError] = useDbData("/events");
    // console.log(eventsError);
    const user=useAuthState();
    const [users, usersError] = useDbData("/users");
    //console.log("Users: ",users);
    // console.log(usersError);

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
                            <EventList eventData={events} user={user} allUsers={users}/>
                        </div>
                    }
                ></Route>
                <Route path="/profile" element={
                    <div>
                        <NavBar />
                        <Profile allUsers={users} user={user} allEvents={events} />
                    </div>
                }>
                    
                </Route>
              <Route 
          path="Teams"
          element={
            <div>
              <NavBar/>
              <TeamList/>
            </div>
          
        }
          >


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