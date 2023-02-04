// User Event Card
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./UserEventCard.css";

const UserEventCard = ({ event }) => {
  return (
    <Card>
      <Card.Body className="user-event-card-body">
        <Card.Title className="user-event-card-title">{event.name}</Card.Title>

        <Card.Text className="user-event-card-text">date: something</Card.Text>

        <Card.Text className="user-event-card-text">
          owner: {event.owner}
        </Card.Text>

        <Card.Text className="user-event-card-text">
          location: {event.location}
        </Card.Text>

        <Card.Text className="user-event-card-text">
          max capacity: {event.maxCap}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserEventCard;
