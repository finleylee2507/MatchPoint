import React, { useState } from "react";
import { Alert, Button, Modal } from "react-bootstrap";

const DeleteEventModal = ({ show, handleClose, handleDelete }) => {
  //0->initial state (deletion not triggered), 1->delete successful, 2->delete failed
  const [deletionStatus, setDeletionStatus] = useState(0);

  const yesButtonHandler = async () => {
    //call Event List's delete event function
    let deleteResult = await handleDelete();

    setDeletionStatus(deleteResult ? 1 : 2);

    //clear states
    setDeletionStatus(0);

    //close modal
    handleClose();
  };
  return (
    <Modal show={show} centered backdrop="static" onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Are you sure you want to delete this event?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Since you are the creator of this event, deleting it will delete the
          event for all participants. Are you sure?{" "}
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="primary"
          onClick={yesButtonHandler}
          disabled={deletionStatus !== 0}
        >
          Yes
        </Button>
        <Button
          variant="outline-secondary"
          onClick={handleClose}
          disabled={deletionStatus !== 0}
        >
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteEventModal;
