// Event Card
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import "./EventCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faCircleInfo,
  faLocationDot,
  faPeopleGroup,
  faUserPlus,
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
  calculateDateObjects,
}) => {
  const { name, location, maxCap, imgSrc, participants, owner } = cardData;
  const [currStartDate, setCurrStartDate] = useState(null);
  const [currEndDate, setCurrEndDate] = useState(null);
  const [participantsToShow, setParticipantsToShow] = useState([]);
  console.log("Current user: ", user);
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
      let [startDate, endDate] = calculateDateObjects(cardData);
      setCurrStartDate(startDate);
      setCurrEndDate(endDate);
    }
  }, [cardData]);
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
          <Col sm={3} className="circular-image-wrapper">
            <img className="event-image" src={imgSrc} alt="image of event" />
          </Col>
          <Col sm={5} className="card-top-detail-container">
            <Card.Title className="title">{name}</Card.Title>
            <h2 className="date-time">
              {currStartDate &&
                currStartDate.toLocaleString("en-US", {
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: false,
                  timeZone: "CST",
                })}{" "}
              —{" "}
              {currEndDate &&
                currEndDate.toLocaleString("en-US", {
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: false,
                  timeZone: "CST",
                })}
            </h2>

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

            <div className="see-more" data-testid="see-event-details">
              <FontAwesomeIcon
                className="icon-width"
                icon={faCircleInfo}
              ></FontAwesomeIcon>
              <a
                className="subheader"
                data-cy="see-event-details"
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
              <Col xs={12} sm={12}>
                <Row>
                  <Col
                    xs={{ span: 1, offset: 4 }}
                    sm={{ span: 2, offset: 0 }}
                    className="circular-image-wrapper footer-padding"
                  >
                    {allUsers &&
                      allUsers[owner] &&
                      allUsers[owner].photoURL && (
                        <img
                          className="owner-profile-image"
                          src={allUsers[owner].photoURL}
                          alt="image of event"
                        />
                      )}
                  </Col>

                  <Col xs={5} sm={9} className="footer-padding">
                    <h2 className="subheader">Organized by</h2>

                    <h3 className="details-text">
                      {allUsers[owner].displayName}
                    </h3>
                  </Col>
                </Row>
              </Col>
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
        <hr className="solid"></hr>
        <div className="participant-list-section">
          <h3 className="participant-title">Participants:</h3>
          <div>
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
          </div>
        </div>
        <div className="card-footer">
          {cardData.owner !== user.uid &&
            !cardData.participants.includes(user.uid) && (
              <Button
                className="event-card-button join-event-button"
                data-testid="join-event"
                onClick={handleJoinEvent}
                variant="primary"
                size="lg"
              >
                Join Event
              </Button>
            )}

          {owner === user.uid && (
            <Button
              onClick={handleEdit}
              variant="warning"
              size="lg"
              className="event-card-button edit-event-button"
            >
              Edit Event
            </Button>
          )}

          {owner === user.uid && (
            <div data-cy="delete-event-button">
              <Button
                onClick={handleDelete}
                variant="danger"
                size="lg"
                className="event-card-button delete-event-button"
              >
                Delete Event
              </Button>
            </div>
          )}

          {cardData.participants.includes(user.uid) &&
            cardData.owner !== user.uid && (
              <Button
                size="lg"
                data-testid="leave-event"
                className="event-card-button leave-event-button"
                onClick={() => {
                  handleLeave(cardData);
                }}
              >
                Leave Event
              </Button>
            )}
        </div>
      </Col>
    </Card>
  );
};

export default EventCard;
