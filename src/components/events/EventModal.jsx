import React from "react";
import { Button, Modal } from "react-bootstrap";

function EventModal({ show, handleJoin, handleClose, data, allUsers }) {
  console.log("modal data: ", data);
  const { name, location, maxCap, currCap, participants, id, imgSrc } = data;
  console.log("participants: ", participants);
  console.log("All users: ", allUsers);
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
        <p>Location: {location}</p>
        <span>Participants: </span>

        {participants &&
          participants.map((id) => allUsers[id].displayName).join(", ")}
        <p>Spots Available: {maxCap - currCap}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => handleJoin(data)}>
          Join Event
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EventModal;
