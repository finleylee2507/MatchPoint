// User Event Card
import React, {useState} from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./UserEventCard.css";

const UserEventCard = ({ event, displayName, allUsers, displayModalHook }) => {
  
  const handleOnClick = () => {
    
    displayModalHook({eventData:event, isShow:true})
  }
  return (
    <Card>
      <Card.Body className="user-event-card-body" onClick={handleOnClick}>
        <Card.Title>{event.name}</Card.Title>

        <Card.Text>date: something</Card.Text>

        <Card.Text>owner: {allUsers[event.owner].displayName}</Card.Text>

        <Card.Text>location: {event.location}</Card.Text>

        <Card.Text>max capacity: {event.maxCap}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserEventCard;
