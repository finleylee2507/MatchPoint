import React from "react";
import Message from "./Message.jsx";
// import { getUserMessages } from "../../utilities/firebase";
// import messageData from "../../utilities/data/message.json";

const MessageList = ({ allUsers, user, allMessages }) => {
  console.log(user);
  console.log(allUsers);
  console.log(allMessages);
  if (user == undefined || allUsers == undefined || allMessages == undefined) {
    return "";
  }

  if (allUsers[user.uid]["unreadMessages"]) {
    return (
      <div className="event-list">
        {Object.entries(allUsers[user.uid]["unreadMessages"]).map(([id, m]) => (
          <Message key={id} message={allMessages[m]} />
        ))}
      </div>
    );
  } else {
    return <p className="empty-page-message">You have no messages ...</p>;
  }
};

export default MessageList;
