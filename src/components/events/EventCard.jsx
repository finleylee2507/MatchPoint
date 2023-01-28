// Event Card
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./EventCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faLocationDot,
  faPeopleGroup,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const EventCard = ({
  openModal,
  cardData,
  openDeleteEventModal,
  handleSetEventToDelete,
  handleSetEventToEdit,
  openEditEventModal,
  user,
  allUsers,
  handleJoin,
  handleLeave,
}) => {
  const { name, location, maxCap, imgSrc, participants, owner } = cardData;
  console.log("All users: ", allUsers);
  const handleDelete = () => {
    //pass to-be-deleted event to the parent component
    handleSetEventToDelete(cardData);

    //show modal
    openDeleteEventModal();
  };

  const handleEdit = () => {
    //pass to-be-updated event to the parent component
    handleSetEventToEdit(cardData);

    //open modal
    openEditEventModal();
  };

  const handleJoinEvent = () => {
    handleJoin(cardData);
  };

  return (
    <Card className="card">
      <Col>
        <Row className="card-top">
          <Col xs={4} className="circular-image-wrapper">
            <img className="image" src={imgSrc} alt="image of event" />
          </Col>
          <Col>
            <h2 className="text-muted">Date . Time</h2>
            <Card.Title className="card-title">{name}</Card.Title>
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            <a
              href={`https://maps.google.com/?q=${cardData.location}`}
              class="subheader"
              target="_blank"
            >
              {" "}
              Location: {cardData.location}
            </a>
          </Col>
        </Row>
        <hr class="solid"></hr>
        <Row className="card-middle">
          <Col>
            <h className="details-header">Event Size</h>
            <div className="details">
              <div className="left">
                <FontAwesomeIcon icon={faPeopleGroup}></FontAwesomeIcon>
              </div>
              <div className="right">
                <h3 className="details-text">{maxCap}</h3>
              </div>
            </div>
          </Col>
          <Col>
            <h className="details-header">Spots Available</h>
            <div className="details">
              <div className="left">
                <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
              </div>
              <div className="right">
                <h3 className="details-text">{maxCap - participants.length}</h3>
              </div>
            </div>
          </Col>
          <Col>
            <h className="details-header">Experience Level</h>
            <div className="details">
              <div className="left">
                <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
              </div>
              <div className="right">
                <h3 className="details-text">{cardData.skillLevel}</h3>
              </div>
            </div>
          </Col>
        </Row>
        <div className="card-footer">
          <Row>
            <Col xs={2} className="circular-image-wrapper footer-padding">
              <img
                className="profile-image"
                src={allUsers[owner].photoURL}
                alt="image of event"
              />
            </Col>
            <Col className="footer-padding">
              <h2 className="subheader">Organized by</h2>
              <h3 className="details-text">{allUsers[owner].displayName}</h3>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button
                className="card-button"
                onClick={() => {
                  openModal(cardData);
                }}
                variant="primary"
                size="lg"
              >
                See more
              </Button>
            </Col>

            {cardData.owner !== user.uid &&
              !cardData.participants.includes(user.uid) && (
                <Col>
                  <Button
                    className="card-button"
                    onClick={handleJoinEvent}
                    variant="primary"
                    size="lg"
                  >
                    Join Event
                  </Button>
                </Col>
              )}

            {owner === user.uid && (
              <Col>
                <Button
                  onClick={handleEdit}
                  variant="warning"
                  size="lg"
                  className="edit-event-button"
                >
                  Edit Event
                </Button>
              </Col>
            )}

            {owner === user.uid && (
              <Col>
                <Button
                  onClick={handleDelete}
                  variant="danger"
                  size="lg"
                  className="delete-event-button"
                >
                  Delete Event
                </Button>
              </Col>
            )}

            {cardData.participants.includes(user.uid) &&
              cardData.owner !== user.uid && (
                <Col>
                  <Button
                    size="lg"
                    onClick={() => {
                      handleLeave(cardData);
                    }}
                  >
                    Leave Event
                  </Button>
                </Col>
              )}
          </Row>
        </div>
      </Col>
    </Card>
  );
};

export default EventCard;
