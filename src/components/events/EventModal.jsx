import React, { useState } from "react";
import { Alert, Button, Modal, Table, Row} from "react-bootstrap";
import "./EventModal.css";
import logo from "../../assets/small-logo.png";

function EventModal({ show, handleJoin, handleClose, data, allUsers }) {
  // console.log("modal data: ", data);
  const { name, location, maxCap, participants, dateTimeString, desc, owner } = data;
  const [shouldDisplayStatusMsg, setShouldDisplayStatusMsg] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);
  const dateTime = new Date(dateTimeString);
  //console.log("participants: ", participants);
  // console.log("All users: ", allUsers);
  // console.log("Owner:",owner);

  const joinEventSuccessElement = (
    <Alert key="success" variant="success">
      Successfully joined event!
    </Alert>
  );

  const joinEventFailureElementGeneric = (
    <Alert key="danger" variant="danger">
      Hmm something went wrong... Please check and try again.
    </Alert>
  );

  const joinEventFailureElementOwnEvent = (
    <Alert key="danger" variant="danger">
      Error: you can't join an event that you created!
    </Alert>
  );

  const joinEventFailureElementParticipants = (
    <Alert key="danger" variant="danger">
      Error: you can't join an event that you're already a part of!
    </Alert>
  );

  const joinEventFailureElementEventFull = (
    <Alert key="danger" variant="danger">
      Sorry the event has no available spots left...
    </Alert>
  );

  return (
    <Modal
      show={show}
      onHide={handleClose}
      info={data}
      centered
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Description: {desc}
        </p>
        <p>Location: {location}</p>
        <p>
          Time:{" "}
          {dateTime.toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: false,
            timeZone: "CST",
          })}{" "}
          CST
        </p>
        {/* {owner && <p>Owner: {allUsers[owner].displayName}</p>} */}
        <span>Participants: </span> {participants && participants.length == maxCap && <span>Event is full!</span>}
        <Table className="modal-participant-list">
          <tbody>
            {participants && participants.map((id) => (
              <tr className="participant-list-items">
                <td>
                  <img
                    className="profile-image-modal"
                    src={allUsers[id].photoURL} 
                  />
                </td>
                <td className="participant-list-names">
                  <span className="modal-participant-name">{allUsers[id].displayName} {id == owner ? "(Owner)":""}</span>
                </td>
              </tr>
            ))}
            {participants && participants.length < maxCap &&
              [...Array(maxCap - participants.length)].map((_, i) => (
                <tr className="participant-list-items">
                  <td>
                    <img
                      className="profile-image-modal"
                      src={logo} 
                    />
                  </td>
                  <td className="participant-list-names">
                    <span className="empty-participant-name">Empty spot</span>
                  </td>
                </tr>
              ))
            }
            {participants && participants.length == 0 && <tr><td>No participants yet!</td></tr>}
            
            
          </tbody>
        </Table>
        {/* <p>
          Spots Available:{" "}
          {participants ? maxCap - participants.length : maxCap}
        </p> */}
        
      </Modal.Body>
      {/*<Modal.Footer>*/}
      {/*  */}

      {/*</Modal.Footer>*/}
    </Modal>
  );
}

export default EventModal;
