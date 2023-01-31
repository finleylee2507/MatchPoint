import React from "react";
import "./Message.css";
import { updateReadAndUnreadMessages } from "../../utilities/firebase";

const Message = ({ message, allUsers, user }) => {
  if (message == undefined || allUsers == undefined || user == undefined) {
    return "";
  }

  const markAsRead = () => {
    console.log("message clicked");

    if (message.id == "welcome") {
      return;
    }
    let updatedMessageData = {};
    if (!allUsers[user.uid].readMessages) {
      //user has no read messages
      // Update the list of unread messages
      let userUnreadMessages = allUsers[user.uid].unreadMessages;

      userUnreadMessages = userUnreadMessages.filter(
        (messageId) => messageId !== message.id
      );
      updatedMessageData.unreadMessages = userUnreadMessages;
      updatedMessageData.readMessages = [message.id];

      // Call firebase function to update read and unread messages
      updateReadAndUnreadMessages(updatedMessageData, user.uid);
    } else {
      //user has read messages

      if (!allUsers[user.uid].readMessages.includes(message.id)) {
        //make sure the message is not already in the read message list

        // Update the list of unread messages
        let userUnreadMessages = allUsers[user.uid].unreadMessages;

        userUnreadMessages = userUnreadMessages.filter(
          (messageId) => messageId !== message.id
        );
        updatedMessageData.unreadMessages = userUnreadMessages;
        updatedMessageData.readMessages = [
          ...allUsers[user.uid].readMessages,
          message.id,
        ];

        // Call firebase function to update read and unread messages
        updateReadAndUnreadMessages(updatedMessageData, user.uid);
      }
    }
  };

  return (
    <div className="message" onClick={markAsRead}>
      <div>
        <h1 className="card-title">{message.title}</h1>
        <h3 className="subtitle">Event name</h3>
        <p className="message-content">{message.content}</p>
      </div>
    </div>
  );
};

export default Message;
