import React from 'react';
import {Button, Form, Modal} from 'react-bootstrap';

function AddEventModal({show, handleClose, data}) {
    // const {name, location, max_cap, cur_cap, users} = data
    return (
        <Modal show={show} onHide={handleClose} info={data} centered>
            <Modal.Header closeButton>
                <Modal.Title>Add an event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Post new event, recruit your team!</h4>
                <Form>
                    <Form.Group className="mb-3" controlId="event-name">
                        <Form.Label>Event Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="event-name"
                            autoFocus
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="event-location">
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                            type="text"
                            name="event-location"
                            autoFocus
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="team-capacity">
                        <Form.Label>Team Capacity</Form.Label>
                        <Form.Control
                            type="text"
                            autoFocus
                            name="team-capacity"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="event-date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            type="date"
                            name="event-date"
                            autoFocus
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="event-time">
                        <Form.Label>Time</Form.Label>
                        <Form.Control
                            type="time"
                            name="event-time"
                            autoFocus
                        />
                    </Form.Group>


                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Create Event
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddEventModal;