import React, {useState} from 'react';
import {Alert, Button, Form, Modal, Spinner} from 'react-bootstrap';
import "./AddEventModal.css";

const AddEventModal = ({show, handleClose, handleSubmit, data}) => {
    const [formData, setFormData] = useState({ //used to store form data
        eventName: "",
        eventLocation: "",
        eventCapacity: 0,
        imageFile: ""

    });

    const creatingEventElement = (<div className="creating-event-container">
            <p className="creating-event-text">
                Creating Event...
            </p>
            <div className="submission-status-icon">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Creating Event...</span>
                </Spinner>
            </div>
        </div>
    );

    const eventCreationSuccessElement = (
        <Alert key="success" variant="success">
            Successfully created event!
        </Alert>
    );

    const eventCreationFailureElement = (
        <Alert key="danger" variant="danger">
            Hmm something went wrong... Please check and try again.
        </Alert>
    );


    //0->not submitted, 1-> submitting, 2-> successful, 3 ->unsuccessful
    let [submissionStatus, setSubmissionStatus] = useState(0);
    const [validated, setValidated] = useState(false);


    const handleChange = (event) => {
        const {name, value, type, files} = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "file" ? files[0] : value
        }));
    };

    const createEvent = async (e) => {
        e.preventDefault();
        
        setSubmissionStatus(1);
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            setSubmissionStatus(0);
            setValidated(true);
            // console.log("huh");
            return;
        }
        
        
        //create event based on form input
        const newEvent = {
            name: formData.eventName,
            maxCap: formData.eventCapacity,
            location: formData.eventLocation,
            owner: data.uid,
            currCap: 1,

            //uncollected fields that exist in database
            activity: "",
            desc: "",
            imgSrc: "",
            privacy: 0,
            participants: []

        };


        //call parent's function to submit event to database
        try {
            const submissionResult = await handleSubmit(newEvent, formData.imageFile);
            // console.log(submissionResult);
            setSubmissionStatus(2);

            setTimeout(() => {
                //clear state
                setFormData({
                    eventName: "",
                    eventLocation: "",
                    eventCapacity: 0
                });
                setSubmissionStatus(0);

                //close modal
                handleClose();
            }, 5000);


        } catch (error) {
            console.log(error);
            setSubmissionStatus(3);
        }


    };
    return (
        <Modal show={show} onHide={handleClose} info={data} centered backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Create an event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={createEvent} id="create-event-form">
                    <Form.Group className="mb-3" controlId="event-name">
                        <Form.Label>Event Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="eventName"
                            value={formData.eventName}
                            onChange={handleChange}
                            autoFocus
                            required
                        />
                        <Form.Control.Feedback type="invalid">Please provide an event name.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="event-location">
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                            type="text"
                            name="eventLocation"
                            value={formData.eventLocation}
                            onChange={handleChange}
                            required
                            autoFocus
                        />
                        <Form.Control.Feedback type="invalid">Please provide a location.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="event-capacity">
                        <Form.Label>Capacity</Form.Label>
                        <Form.Control
                            type="number"
                            min="1"
                            max="100"
                            name="teamCapacity"
                            value={formData.teamCapacity}
                            onChange={handleChange}
                            required
                            autoFocus
                        />
                        <Form.Control.Feedback type="invalid">Please provide a valid number of attendees.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="upload-image">
                        <Form.Label>Upload Cover Image (Optional)</Form.Label>
                        <Form.Control type="file" name="imageFile" onChange={handleChange} accept="image/*"/>
                    </Form.Group>


                    <div className="submission-status">

                        {
                            (() => {
                                switch (submissionStatus) {
                                    case 1:
                                        return creatingEventElement;
                                    case 2:
                                        return eventCreationSuccessElement;
                                    case 3:
                                        return eventCreationFailureElement;
                                }
                            })()
                        }
                    </div>


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
                <Button variant="primary" type="submit" form="create-event-form" disabled={submissionStatus !== 0}>
                    Create Event
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddEventModal;