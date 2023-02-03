// Profile Component
import UserEventCard from "./UserEventCard";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Profile.css";
import UserAvatar from "./UserAvatar";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React, { useState } from "react";
import EventModal from "../events/EventModal";
import UserEventList from "./UserEventList";
const Profile = ({ allUsers, user, allEvents }) => {

  const [showEventModal, setShowEventModal] = useState(false)
  const [eventData, setEventData] = useState({})
  const displayModalHook = ({ eventData, isShow }) => {
    setShowEventModal(isShow)
    setEventData(eventData)
  }

  const handleClose = () => {

    setShowEventModal(false)
  }
  if (user == undefined || allUsers == undefined) {
    return (
      <div>
        <p>Unable to display your profile. Please try again later.</p>
      </div>
    );
  } else if (allUsers[user.uid]) {
    return (
      <div className="user-profile-container">
        <EventModal
          show={showEventModal}
          handleClose={handleClose}
          data={eventData}
          allUsers={allUsers}
        />
        <UserAvatar
          imgSrc={user.photoURL}
        />
        <p className="user-profile-title">{`Hi, ${allUsers[user.uid].displayName
          }`}</p>
        <Tabs defaultActiveKey="upcoming" className="mb-3">
          <Tab eventKey="upcoming" title="Upcoming">
            <UserEventList past={false} user={allUsers[user.uid]} allEvents={allEvents} allUsers={allUsers} displayModalHook={displayModalHook} />
          </Tab>
          <Tab eventKey="past" title="Past">
            <UserEventList past={true} user={allUsers[user.uid]} allEvents={allEvents} allUsers={allUsers} displayModalHook={displayModalHook} />
          </Tab>
        </Tabs>
      </div>
    );
  }
};

export default Profile;
