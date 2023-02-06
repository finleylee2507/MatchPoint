import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import "./MessageModal.css";

const MessageModal = ({ show, handleClose, messageData }) => {
  return (
    <Modal
      show={show}
      backdrop="static"
      fullscreen="sm-down"
      size="lg"
      scrollable="true"
      centered
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>{messageData.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{messageData.content}</Modal.Body>

      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() => {
            handleClose();
          }}
          className="message-modal-confirm-button"
        >
          Got it
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MessageModal;
