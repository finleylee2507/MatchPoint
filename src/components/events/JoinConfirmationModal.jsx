import { Button, Modal } from "react-bootstrap";
import React from "react";

const JoinConfirmationModal = ({ isShow, onResolve, conflictingEventName }) => (
  <Modal show={isShow} backdrop="static" onHide={() => onResolve(false)}>
    <Modal.Header closeButton>
      <Modal.Title>Join event?</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      The event that you're trying to join conflicts with one of your other
      events titled <b>{conflictingEventName}</b>. Are you sure you want to
      join?
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={() => onResolve(true)}>
        Confirm
      </Button>
      <Button variant="secondary" onClick={() => onResolve(false)}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

export default JoinConfirmationModal;
