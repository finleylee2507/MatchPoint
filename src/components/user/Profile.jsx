// Profile Component
import "./Profile.css";
import UserAvatar from "./UserAvatar";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React, { useRef, useState } from "react";
import { Image } from "react-bootstrap";
import UserEventList from "./UserEventList";
import { ToastContainer } from "react-toastify";
import no_events from "../../assets/no_event.png";

const Profile = ({ allUsers, user, allEvents }) => {
  const [showEventModal, setShowEventModal] = useState(false);
  const [eventData, setEventData] = useState({});
  const displayModalHook = ({ eventData, isShow }) => {
    setShowEventModal(isShow);
    setEventData(eventData);
  };

  const handleClose = () => {
    setShowEventModal(false);
  };
  const timer = useRef(null);
  let loading = false;
  if (user == undefined || allUsers == undefined) {
    if (!loading) {
      loading = true;
      timer.current = setTimeout(() => {
        console.log("Failed to load");
        loading = false;
      }, 1000);
    }
    return (
      <div>
        <p className="profile-loading-message">
          {loading
            ? "Loading..."
            : "Unable to load profile. Please try again later"}
        </p>
      </div>
    );
  } else if (allUsers[user.uid]) {
    clearTimeout(timer.current);
    console.log("done loading");

    let upcomingEvents = [];
    let pastEvents = [];

    if (allUsers[user.uid].events) {
      upcomingEvents = allUsers[user.uid].events.filter(
        (event) => new Date(allEvents[event].dateTimeString) > new Date()
      );
      pastEvents = allUsers[user.uid].events.filter(
        (event) => new Date(allEvents[event].dateTimeString) <= new Date()
      );
    }

    console.log("Upcoming events: ", upcomingEvents);

    console.log("Past events: ", pastEvents);
    return (
      <div className="user-profile-container">
        <div className="profile-top">
          <UserAvatar imgSrc={user.photoURL} />
          <p className="user-profile-title">{allUsers[user.uid].displayName}</p>
        </div>
        <Tabs defaultActiveKey="upcoming" className="mb-3 profile-tabs">
          <Tab
            className="profile-tab-upcoming"
            eventKey="upcoming"
            title="Upcoming"
          >
            {upcomingEvents.length === 0 ? (
              <div>
                <ToastContainer autoClose={2000} />
                <img className="no-event-img" src={no_events} alt="no_event" />
                <p>
                  You don't have any upcoming events. Please create one, or join
                  one from the All Events tab!
                </p>
              </div>
            ) : (
              <div>
                <ToastContainer autoClose={2000} />
                <UserEventList
                  events={allEvents}
                  renderEvents={upcomingEvents}
                  user={user}
                  users={allUsers}
                />
              </div>
            )}
          </Tab>
          <Tab className="profile-tab-past" eventKey="past" title="Past">
            {pastEvents.length === 0 ? (
              <div>
                <ToastContainer autoClose={2000} />
                <img className="no-event-img" src={no_events} alt="no_event" />
                <p>You don't have any past events.</p>
              </div>
            ) : (
              <div>
                <ToastContainer autoClose={2000} />
                <UserEventList
                  events={allEvents}
                  renderEvents={pastEvents}
                  user={user}
                  users={allUsers}
                />
              </div>
            )}
          </Tab>
        </Tabs>
      </div>
    );
  }
};

export default Profile;
