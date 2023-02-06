import React from "react";
import { Image } from "react-bootstrap";
import "./Profile.css";
import UserEventCard from "./UserEventCard";

const UserEventList = ({
  past,
  user,
  allEvents,
  allUsers,
  displayModalHook,
}) => {
  if (user["events"]) {
    let new_user_events = user["events"];
    if (!past)
      new_user_events = new_user_events.filter(
        (event) => new Date(allEvents[event].dateTimeString) >= new Date()
      );
    else
      new_user_events = new_user_events.filter(
        (event) => new Date(allEvents[event].dateTimeString) < new Date()
      );
    return new_user_events.map((e) => (
      <UserEventCard
        key={e}
        event={allEvents[e]}
        allUsers={allUsers}
        displayModalHook={displayModalHook}
      />
    ));
  } else {
    return (
      <div>
        <Image className="no-event-img" src="../../src/assets/no_event.png" alt="no_event" />
        <p>
          You don't have any {past ? "past" : "upcoming"} events. Please create
          one, or join one from the All Events tab!
        </p>
      </div>
    );
  }
};

export default UserEventList;
