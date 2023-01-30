import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
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

    // Update the list of read messages
    if (!allUsers[user.uid].readMessages) {
      updatedMessageData.readMessages = [message.id];
    } else {
      updatedMessageData.readMessages = [
        ...allUsers[user.uid].readMessages,
        message.id,
      ];
    }

    // Update the list of unread messages
    var userUnreadMessages = allUsers[user.uid].unreadMessages;
    var indexToDelete = userUnreadMessages.indexOf(message.id);
    delete userUnreadMessages[indexToDelete];

    updatedMessageData.unreadMessages = userUnreadMessages;

    // Call firebase function to update read and unread messages
    updateReadAndUnreadMessages(updatedMessageData, user.uid);
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
