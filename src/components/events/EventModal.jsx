import React from "react";
import {Modal} from "react-bootstrap";
import "./EventModal.css";

function EventModal({show, handleJoin, handleClose, data}) {
    if (!data) {
        return "";
    }
    const {name, location, dateTimeString, desc} = data;

    const dateTime = new Date(dateTimeString);

    return (
        <Modal
            show={show}
            onHide={handleClose}
            info={data}
            centered
            backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title>{name + " Details"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="modal-details" data-cy="event-details-description">
                    {desc}
                </p>
            </Modal.Body>
        </Modal>
    );
}

export default EventModal;
