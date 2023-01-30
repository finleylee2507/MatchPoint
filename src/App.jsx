import "./App.css";
import EventList from "./components/events/EventList";
import NavBar from "./components/Navbar";
import Landing from "./components/Landing";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useAuthState, useDbData} from "./utilities/firebase";
import MessageList from "./components/messages/MessageList";
import {useEffect, useState} from "react";

const App = () => {
    const [events, eventsError] = useDbData("/events");
    const user = useAuthState();
    const [users, usersError] = useDbData("/users");
    const [messages, messagesError] = useDbData("/messages");
    const [numberOfUnread, setNumberOfUnread] = useState(0);

    useEffect(() => {
        if (user && users) {
            setNumberOfUnread(users[user.uid].unreadMessages.length);
        }
    });
    console.log("User: ", user);
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <Landing allUsers={users}/>
                        </div>
                    }
                ></Route>
                <Route
                    path="/allEvents"
                    element={
                        <div>
                            <NavBar numberOfUnread={numberOfUnread}/>
                            <EventList eventData={events} user={user} allUsers={users}/>
                        </div>
                    }
                ></Route>
                <Route
                    path="/inbox"
                    element={
                        <div>
                            <NavBar numberOfUnread={numberOfUnread}/>
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
