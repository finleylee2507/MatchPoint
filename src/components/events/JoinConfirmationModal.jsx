import { Button, Modal } from "react-bootstrap";
import React from "react";

const JoinConfirmationModal = ({
  isShow,
  onResolve,
  conflictingEventName,
  actionItem,
}) => (
  <Modal
    show={isShow}
    backdrop="static"
    onHide={() => onResolve(false)}
    size="lg"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title>
        {actionItem.charAt(0).toUpperCase() + actionItem.slice(1)} event?
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      The event that you're trying to {actionItem} conflicts with one of your
      other events titled <b>{conflictingEventName}</b>. Are you sure you want
      to {actionItem}?
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
