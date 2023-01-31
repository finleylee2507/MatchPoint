import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

const MessageModal = ({ show, handleClose, messageData }) => {
  return (
    <Modal
      show={show}
      backdrop="static"
      fullscreen="sm-down"
      size="lg"
      scrollable="true"
    >
      <Modal.Header>
        <Modal.Title>{messageData.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{messageData.content}</Modal.Body>

      <Modal.Footer>
        <Button
          variant="primary"
          onClick={() => {
            handleClose();
          }}
        >
          Got it
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MessageModal;
