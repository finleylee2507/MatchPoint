import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Message.css";

const Message = ({ message }) => {
  if (message == undefined) {
    return "";
  }

  return (
    <Card className="card" onClick={() => console.log("you click the btn")}>
      <Card.Body className="card-body">
        <Card.Title className="card-title">{message.title}</Card.Title>
        <Card.Text className="card-text">{message.content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Message;
