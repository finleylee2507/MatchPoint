import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Message.css";

const Message = ({ message }) => {
  if (message == undefined) {
    return "";
  }

  return (
    <div className="message" onClick={() => console.log("you click the btn")}>
      <div>
        <h1 className="card-title">{message.title}</h1>
        <h3 className="subtitle">Event name</h3>
        <p className="message-content">{message.content}</p>
      </div>
    </div>
  );
};

export default Message;
