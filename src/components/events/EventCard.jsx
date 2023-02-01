// Event Card
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import "./EventCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faLocationDot,
  faPeopleGroup,
  faUserPlus,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import ellipsis from "../../assets/ellipsis.jpg";

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
  handleSetEventToShowParticipants,
  handleShowParticipantsModal,
}) => {
  const { name, location, maxCap, imgSrc, participants, owner } = cardData;
  const [participantsToShow, setParticipantsToShow] = useState([]);
  useEffect(() => {
    if (cardData && allUsers) {
      let tempList = [];
      for (let i = 0; i < Math.min(5, cardData.participants.length); i++) {
        tempList.push({
          photoURL: allUsers[cardData.participants[i]].photoURL,
          displayName: allUsers[cardData.participants[i]].displayName,
        });
      }
      setParticipantsToShow(tempList);
    }
  }, [cardData]);
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
            <Card.Title className="title">{name}</Card.Title>
            <h2 className="date-time">{(new Date(cardData.dateTimeString)).toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: false,
              timeZone: "CST",
            })}</h2>

            <div className="location">
              <FontAwesomeIcon
                className="icon-width"
                icon={faLocationDot}
              ></FontAwesomeIcon>
              <a
                href={`https://maps.google.com/?q=${cardData.location}`}
                className="subheader"
                target="_blank"
              >
                {" "}
                {cardData.location}
              </a>
            </div>

            <div className="see-more">
              <FontAwesomeIcon
                className="icon-width"
                icon={faCircleInfo}
              ></FontAwesomeIcon>
              <a
                className="subheader"
                onClick={() => {
                  openModal(cardData);
                }}
              >
                See Event Details
              </a>
            </div>
          </Col>

          <Col>
            <Row>
              <Col xs={2} className="circular-image-wrapper footer-padding">
                {allUsers && allUsers[owner] && allUsers[owner].photoURL && (
                  <img
                    className="owner-profile-image"
                    src={allUsers[owner].photoURL}
                    alt="image of event"
                  />
                )}
              </Col>
              <Col className="footer-padding">
                <h2 className="subheader">Organized by</h2>

                <h3 className="details-text">{allUsers[owner].displayName}</h3>
              </Col>
            </Row>

            <Row>
              <h3 className="participant-title">Participants:</h3>
              <p
                className="participant-list-container"
                onClick={() => {
                  handleShowParticipantsModal();
                  handleSetEventToShowParticipants(cardData);
                }}
              >
                {participantsToShow.map((participant) => {
                  let photoURL = participant.photoURL;
                  let displayName = participant.displayName;
                  return (
                    <img
                      className="participant-profile-image"
                      src={photoURL}
                      alt={displayName}
                      title={displayName}
                      key={participantsToShow.indexOf(participant)}
                    />
                  );
                })}
                {cardData.participants.length > 5 && (
                  <img
                    className="participant-profile-image"
                    src={ellipsis}
                    title="more"
                  />
                )}
              </p>
            </Row>
          </Col>
        </Row>
        <hr className="solid"></hr>
        <Row className="card-middle">
          <Col>
            <h3 className="details-header">Event Size</h3>
            <div className="details">
              <div className="left">
                <FontAwesomeIcon
                  className="icon-width"
                  icon={faPeopleGroup}
                ></FontAwesomeIcon>
              </div>
              <div className="right">
                <h3 className="details-text">{maxCap}</h3>
              </div>
            </div>
          </Col>
          <Col>
            <h3 className="details-header">Spots Available</h3>
            <div className="details">
              <div className="left">
                <FontAwesomeIcon
                  className="icon-width"
                  icon={faUserPlus}
                ></FontAwesomeIcon>
              </div>
              <div className="right">
                <h3 className="details-text">{maxCap - participants.length}</h3>
              </div>
            </div>
          </Col>
          <Col>
            <h3 className="details-header">Experience Level</h3>
            <div className="details">
              <div className="left">
                <FontAwesomeIcon
                  className="icon-width"
                  icon={faAward}
                ></FontAwesomeIcon>
              </div>
              <div className="right">
                <h3 className="details-text">{cardData.skillLevel}</h3>
              </div>
            </div>
          </Col>
        </Row>
        <div className="card-footer">
          <Row>
            <Col></Col>

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
