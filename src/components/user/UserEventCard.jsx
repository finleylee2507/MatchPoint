// User Event Card
import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import UserAvatar from "./UserAvatar";
import "./UserEventCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faLocationDot,
  faPeopleGroup,
  faUserPlus,
  faCircleInfo,
  faUser,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
const UserEventCard = ({ event, displayName, allUsers, displayModalHook }) => {
  console.log(event)
  const handleOnClick = () => {

    displayModalHook({ eventData: event, isShow: true })
  }
  return (
    <Card>
      <Card.Body className="user-event-card-body" onClick={handleOnClick}>
        <Row>
          <Col xs={5} className="circular-image-wrapper">
            <img className="image" src={event.imgSrc} />
          </Col>
          <Col>
            <Card.Title className="title">{event.name}</Card.Title>

            <div className="card-info">
              <FontAwesomeIcon
                className="icon-width"
                icon={faCalendar}

              />
              <div>{(new Date(event.dateTimeString)).toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: false,
                timeZone: "CST",
              })}</div>
            </div>

            <div className="card-info">
              <FontAwesomeIcon
                className="icon-width"
                icon={faUser}
              />
              <div>Owner: {allUsers[event.owner].displayName}</div>
            </div>
            <div className="card-info">
              <FontAwesomeIcon
                className="icon-width"
                icon={faLocationDot}
              />
              <div>Location: {event.location}</div>
            </div>
          </Col>
        </Row>


      </Card.Body>
    </Card>
  );
};

export default UserEventCard;
