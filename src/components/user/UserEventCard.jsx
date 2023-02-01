// User Event Card
import React, {useState} from "react";
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
    
    displayModalHook({eventData:event, isShow:true})
  }
  return (
    <Card>
      <Card.Body className="user-event-card-body" onClick={handleOnClick}>
        <Row>
          <Col>
            <UserAvatar imgSrc={event.imgSrc} width={100} height={100}/>
          </Col>
          
          <Col>
            <Card.Title>{event.name}</Card.Title>
            {/* <Card.Text>{event.desc}</Card.Text> */}

            <div className="card-info">
              <FontAwesomeIcon
                className="icon-width"
                icon={faCalendar}
                
              />
              <Card.Text>{event.dateTimeString}</Card.Text>
            </div>

            <div className="card-info">
              <FontAwesomeIcon
                className="icon-width"
                icon={faUser}
              />
              <Card.Text>{allUsers[event.owner].displayName}</Card.Text>
            </div>
            <div className="card-info">
              <FontAwesomeIcon
                className="icon-width"
                icon={faLocationDot}
              />
              <Card.Text>{event.location}</Card.Text>
            </div>

              
              {/* <Card.Text>owner: {allUsers[event.owner].displayName}</Card.Text>
              <Card.Text>location: {event.location}</Card.Text>
              <Card.Text>max capacity: {event.maxCap}</Card.Text> */}



          </Col>
        </Row>


      </Card.Body>
    </Card>
  );
};

export default UserEventCard;
