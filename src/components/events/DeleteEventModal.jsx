import React, {useState} from "react";
import {Alert, Button, Modal} from "react-bootstrap";

const DeleteEventModal = ({show, handleClose, handleDelete}) => {

    //0->initial state (deletion not triggered), 1->delete successful, 2->delete failed
    const [deletionStatus, setDeletionStatus] = useState(0);
    const eventDeletionSuccessElement = (
        <Alert key="success" variant="success" className="mt-3">
            Successfully deleted event!
        </Alert>
    );

    const eventDeletionFailureElement = (
        <Alert key="danger" variant="danger" className="mt-3">
            Hmm something went wrong... Please check and try again.
        </Alert>
    );

    const yesButtonHandler = async () => {

        //call Event List's delete event function
        let deleteResult = await handleDelete();

        setDeletionStatus(deleteResult ? 1 : 2);


        setTimeout(() => {
            //clear states
            setDeletionStatus(0);

            //close modal
            handleClose();
        }, 1000);


    };
    return (
        <Modal show={show} centered backdrop="static" onHide={handleClose}>
            <Modal.Body>
                <p>Are you sure you want to delete this event?</p>
                <div>
                    {deletionStatus !== 0 && (deletionStatus === 1 ? eventDeletionSuccessElement : eventDeletionFailureElement)}
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" onClick={yesButtonHandler} disabled={deletionStatus !== 0}>
                    Yes
                </Button>
                <Button variant="outline-secondary" onClick={handleClose} disabled={deletionStatus !== 0}>
                    Cancel
                </Button>
            </Modal.Footer>

        </Modal>
    );
};

export default DeleteEventModal;