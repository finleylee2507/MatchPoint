// Profile Component
import UserEventCard from "./UserEventCard";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Profile.css";
import UserAvatar from "./UserAvatar";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React, { useRef, useState } from "react";
import EventModal from "../events/EventModal";
import UserEventList from "./UserEventList";
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
      console.log('Loading '+loading);
      timer.current = setTimeout(() => {
        console.log('Failed to load');
        loading = false;
      }, 1000);
    }
    return (
      <div>
        <p>{loading ? "Loading..." : "Unable to load profile. Please try again later"}</p>
      </div>
    );
  } else if (allUsers[user.uid]) {
    clearTimeout(timer.current);
    console.log("done loading");
    return (
      <div className="user-profile-container">
        <EventModal
          show={showEventModal}
          handleClose={handleClose}
          data={eventData}
          allUsers={allUsers}
        />
        <div className="profile-top">
          <UserAvatar imgSrc={user.photoURL} />
          <p className="user-profile-title">{allUsers[user.uid].displayName}</p>
        </div>
        <Tabs defaultActiveKey="upcoming" className="mb-3 profile-tabs">
          <Tab className="profile-tab" eventKey="upcoming" title="Upcoming">
            <UserEventList
              past={false}
              user={allUsers[user.uid]}
              allEvents={allEvents}
              allUsers={allUsers}
              displayModalHook={displayModalHook}
            />
          </Tab>
          <Tab className="profile-tab" eventKey="past" title="Past">
            <UserEventList
              past={true}
              user={allUsers[user.uid]}
              allEvents={allEvents}
              allUsers={allUsers}
              displayModalHook={displayModalHook}
            />
          </Tab>
        </Tabs>
      </div>
    );
  }
};

export default Profile;
