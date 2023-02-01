
import React from "react";
import './Profile.css'
import UserEventCard from "./UserEventCard";
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

  export default UserEventList