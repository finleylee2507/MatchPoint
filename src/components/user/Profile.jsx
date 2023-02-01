// Profile Component
import UserEventCard from "./UserEventCard";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Profile.css";
import UserAvatar from "./UserAvatar";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React, {useState} from "react";
import EventModal from "../events/EventModal";

const UserEventList = ({ user, allEvents, allUsers, displayModalHook }) => {
  if (user["events"]) {
    return user["events"].map((e) => (
      <UserEventCard key={e} event={allEvents[e]} allUsers={allUsers} displayModalHook={displayModalHook}/>
    ));
  } else {
    return (
      <div>
        <p>
          You don't have any upcoming events. Please create one, or join one
          from the All Events tab!
        </p>
      </div>
    );
  }
};
const Profile = ({ allUsers, user, allEvents }) => {

  const [showEventModal, setShowEventModal] = useState(false)
  const [eventData, setEventData] = useState({})
  const displayModalHook = ({eventData, isShow}) => {
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
    console.log("In here");
    return (
      <div className="user-profile-container">
        <EventModal
          show={showEventModal}
          handleClose={handleClose}
          data={eventData}
          allUsers={allUsers}
        />
        <UserAvatar
          imgSrc={
            "https://as2.ftcdn.net/v2/jpg/02/15/84/43/1000_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
          }
        />
        <p className="user-profile-title">{`Hi, ${
          allUsers[user.uid].displayName
        }`}</p>
        <Tabs defaultActiveKey="upcoming" className="mb-3">
          <Tab eventKey="upcoming" title="Upcoming">
            <UserEventList user={allUsers[user.uid]} allEvents={allEvents} allUsers={allUsers} displayModalHook={displayModalHook}/>
          </Tab>

          <Tab eventKey="past" title="Past"></Tab>
        </Tabs>
      </div>
    );
  }
};

export default Profile;
