// Event Card
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./UserEventCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faLocationDot,
  faPeopleGroup,
  faUserPlus,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

const UserEventCard = ({ event, allUsers }) => {
  return (
    <Card className="user-card">
      <div className="card-header">
        <Card.Title className="title">{event.name}</Card.Title>
        <div className="date-location-container">
          <p>
            {" "}
            {new Date(event.dateTimeString).toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
              timeZone: "CST",
            }) +
              " - " +
              event.location}
          </p>
        </div>
        <hr className="solid"></hr>
        <div className="description-container">
          <p>{event.desc}</p>
        </div>
        <div className="participants-container">
          <p>Participants should be here</p>
        </div>
      </div>
      <div className="card-footer">
        <p>buttons will be here</p>
      </div>
    </Card>
  );
};

// As a user, I want to be able to edit/delet/join the event from my profiel too
export default UserEventCard;
