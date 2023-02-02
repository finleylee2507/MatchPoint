import { Button, Modal } from "react-bootstrap";
import React from "react";

const JoinConfirmationModal = ({
  isShow,
  onResolve,
  onReject,
  conflictingEventName,
}) => (
  <Modal show={isShow} backdrop="static">
    <Modal.Header>
      <Modal.Title>Join event?</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {`The event that you're trying to join conflicts with one of your other events titled "${conflictingEventName}". Are you sure you want to join?`}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={() => onReject(false)}>
        Close
      </Button>
      <Button variant="primary" onClick={() => onResolve(true)}>
        Confirm
      </Button>
    </Modal.Footer>
  </Modal>
);

export default JoinConfirmationModal;
