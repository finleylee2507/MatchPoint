import { Button, Modal } from "react-bootstrap";
import React from "react";
import "./JoinConfirmationModal.css";

const JoinCreateConfirmationModal = ({
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
      <div data-cy="modal-confirm-button">
        <Button
          variant="primary"
          className="confirmation-modal-confirm-button"
          onClick={() => onResolve(true)}
        >
          Confirm
        </Button>
      </div>

      <Button
        variant="outline-secondary"
        className="confirmation-modal-close-button"
        onClick={() => onResolve(false)}
      >
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

export default JoinCreateConfirmationModal;
