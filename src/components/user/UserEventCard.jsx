// Event Card
import { React, useState, useEffect } from "react";
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
import ellipsis from "../../assets/ellipsis.jpg";

const UserEventCard = ({
  event,
  allUsers,
  user,
  handleLeave,
  handleSetEventToShowParticipants,
  handleShowParticipantsModal,
}) => {
  const [currStartDate, setCurrStartDate] = useState(null);
  const [currEndDate, setCurrEndDate] = useState(null);
  const [participantsToShow, setParticipantsToShow] = useState([]);

  const calculateDateObjects = (data) => {
    //initialize target event (the one we're trying to join)
    let eventStartDate = new Date(data.dateTimeString);
    let eventDuration = data.duration;
    let eventEndDate = new Date(eventStartDate);

    //get hours
    let eventDurationHour = Math.floor(eventDuration);
    let eventDurationMinutes = Math.round((eventDuration % 1) * 60);

    eventEndDate.setHours(eventStartDate.getHours() + eventDurationHour);

    eventEndDate.setMinutes(eventEndDate.getMinutes() + eventDurationMinutes);

    return [eventStartDate, eventEndDate];
  };

  useEffect(() => {
    if (event && allUsers) {
      let tempList = [];
      for (let i = 0; i < Math.min(5, event.participants.length); i++) {
        tempList.push({
          photoURL: allUsers[event.participants[i]].photoURL,
          displayName: allUsers[event.participants[i]].displayName,
        });
      }
      setParticipantsToShow(tempList);
      let [startDate, endDate] = calculateDateObjects(event);
      setCurrStartDate(startDate);
      setCurrEndDate(endDate);
    }
  }, [event]);
  const handleDelete = () => {
    //pass to-be-deleted event to the parent component
    handleSetEventToDelete(event);

    //show modal
    openDeleteEventModal();
  };

  const handleEdit = () => {
    //pass to-be-updated event to the parent component
    handleSetEventToEdit(event);

    //open modal
    openEditEventModal();
  };

  const handleJoinEvent = () => {
    handleJoin(event);
  };
  return (
    <Card className="user-card">
      <div className="card-header">
        <Card.Title className="user-event-card-title">{event.name}</Card.Title>
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
        <div className="user-event-description-container">
          <p>{event.desc}</p>
        </div>
        <div className="user-event-participants-container">
          <Row>
            <h3 className="user-event-participant-title">Participants:</h3>
            <p
              className="user-event-participant-list-container"
              onClick={() => {
                handleShowParticipantsModal();
                handleSetEventToShowParticipants(event);
              }}
            >
              {participantsToShow.map((participant) => {
                let photoURL = participant.photoURL;
                let displayName = participant.displayName;
                return (
                  <img
                    className="user-event-participant-profile-image"
                    src={photoURL}
                    alt={displayName}
                    title={displayName}
                    key={participantsToShow.indexOf(participant)}
                  />
                );
              })}
              {event.participants.length > 5 && (
                <img
                  className="user-event-participant-profile-image"
                  src={ellipsis}
                  title="more"
                />
              )}
            </p>
          </Row>
        </div>
      </div>
      <div className="card-footer">
        <Row>
          {user && event.owner === user.uid && (
            <Col>
              <Button
                onClick={handleEdit}
                variant="warning"
                size="lg"
                className="user-event-card-button edit-event-button"
              >
                Edit Event
              </Button>
            </Col>
          )}

          {user && event.owner === user.uid && (
            <Col>
              <Button
                onClick={handleDelete}
                variant="danger"
                size="lg"
                className="user-event-card-button delete-event-button"
              >
                Delete Event
              </Button>
            </Col>
          )}

          {user &&
            event.participants.includes(user.uid) &&
            event.owner !== user.uid && (
              <Col>
                <Button
                  size="lg"
                  onClick={() => {
                    handleLeave(event);
                  }}
                  className="user-event-card-button leave-event-button"
                >
                  Leave Event
                </Button>
              </Col>
            )}
        </Row>
      </div>
    </Card>
  );
};

// As a user, I want to be able to edit/delet/join the event from my profiel too
export default UserEventCard;
