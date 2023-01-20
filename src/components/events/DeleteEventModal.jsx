import React from "react";
import {Button, Modal} from "react-bootstrap";

const DeleteEventModal = ({show, handleClose, handleDelete}) => {
    const yesButtonHandler = async () => {

        //call Event List's delete event function
        let deleteResult = await handleDelete();

        //close modal
        handleClose();

    };
    return (
        <Modal show={show} centered backdrop="static" onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button variant="primary" onClick={yesButtonHandler}>
                    Yes
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    No
                </Button>
            </Modal.Body>

        </Modal>
    );
};

export default DeleteEventModal;