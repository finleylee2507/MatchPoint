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

  if (
    allUsers[user.uid]["unreadMessages"] ||
    allUsers[user.uid]["readMessages"]
  ) {
    var allUserMessages = [];

    if (allUsers[user.uid]["unreadMessages"]) {
      allUserMessages = [
        ...allUserMessages,
        ...allUsers[user.uid]["unreadMessages"],
      ];
    }

    if (allUsers[user.uid]["readMessages"]) {
      allUserMessages = [
        ...allUserMessages,
        ...allUsers[user.uid]["readMessages"],
      ];
    }

    console.log(allUserMessages);
    return (
      <div className="event-list">
        {Object.entries(allUserMessages).map(([id, m]) => (
          <Message
            key={id}
            message={allMessages[m]}
            allUsers={allUsers}
            user={user}
          />
        ))}
      </div>
    );
  } else {
    return <p className="empty-page-message">You have no messages ...</p>;
  }
};

export default MessageList;
