import { Button, Modal } from "react-bootstrap";
import React from "react";

const JoinConfirmationModal = ({ isShow, onResolve, onReject }) => (
  <Modal show={isShow}>
    My Super Promised modal
    <Modal.Footer>
      <Button variant="secondary" onClick={() => onReject("Reject!")}>
        Close
      </Button>
      <Button variant="primary" onClick={() => onResolve("Resolve!")}>
        Save changes
      </Button>
    </Modal.Footer>
  </Modal>
);

export default JoinConfirmationModal;
