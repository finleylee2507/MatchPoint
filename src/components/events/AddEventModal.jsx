import React, {useState} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';


function AddEventModal({show, handleClose, handleSubmit, data}) {
    // const {name, location, max_cap, cur_cap, users} = data
    const [formData, setFormData] = useState({ //used to store form data
        eventName: "",
        eventLocation: "",
        teamCapacity: 0,
        imageFile:""

    });

    const handleChange = (event) => {
        const {name, value, type, files} = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "file"?files[0]  : value
        }));
    };

    const createEvent = () => {
        //create event based on form input
        const newEvent = {
            name: formData.eventName,
            maxCap: formData.teamCapacity,
            location: formData.eventLocation,

            //uncollected fields that exist in database
            activity: "",
            currCap: "",
            desc: "",
            imgSrc: "",
            privacy: 0

        };

        //call parent's function to submit event to database
        handleSubmit(newEvent,formData.imageFile);

        //clear state
        setFormData({
            eventName: "",
            eventLocation: "",
            teamCapacity: 0
        });

        //close modal
        handleClose();
    };
    return (
        <Modal show={show} onHide={handleClose} info={data} centered backdrop="static">
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
                            name="eventName"
                            value={formData.eventName}
                            onChange={handleChange}
                            autoFocus

                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="event-location">
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                            type="text"
                            name="eventLocation"
                            value={formData.eventLocation}
                            onChange={handleChange}
                            autoFocus
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="team-capacity">
                        <Form.Label>Team Capacity</Form.Label>
                        <Form.Control
                            type="number"
                            min="1"
                            max="100"
                            name="teamCapacity"
                            value={formData.teamCapacity}
                            onChange={handleChange}
                            autoFocus
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="upload-image">
                        <Form.Label>Upload Cover Image</Form.Label>
                        <Form.Control type="file" name="imageFile" onChange={handleChange} accept="image/*"/>
                    </Form.Group>
                    {/*<Form.Group className="mb-3" controlId="event-date">*/}
                    {/*    <Form.Label>Date</Form.Label>*/}
                    {/*    <Form.Control*/}
                    {/*        type="date"*/}
                    {/*        name="event-date"*/}
                    {/*        autoFocus*/}
                    {/*    />*/}
                    {/*</Form.Group>*/}

                    {/*<Form.Group className="mb-3" controlId="event-time">*/}
                    {/*    <Form.Label>Time</Form.Label>*/}
                    {/*    <Form.Control*/}
                    {/*        type="time"*/}
                    {/*        name="event-time"*/}
                    {/*        autoFocus*/}
                    {/*    />*/}
                    {/*</Form.Group>*/}


                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={createEvent}>
                    Create Event
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddEventModal;