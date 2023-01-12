import React from 'react'
import {Button, Modal} from 'react-bootstrap'

function EventModal({show, handleClose}) {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Pickup Soccer Game</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Participants: Vedant, Finley, Rawan, Vincent</p>
                <p>Spots Available: 18</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Join Event
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EventModal
