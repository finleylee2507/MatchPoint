import React, {useEffect, useState} from 'react';
import {Button, Form, Modal, Spinner} from 'react-bootstrap';
import "./AddEventModal.css";


const EditEventModal = ({show, handleClose, handleSubmit, user, data}) => {
    const [formData, setFormData] = useState({ //used to store form data
        eventName: "haha",
        eventLocation: "",
        eventCapacity: 0,
        imageFile: "",
        dateString: "",
        timeString: "",
        currentDate: (new Date((new Date()).getTime() - ((60 * 60 * 1000) * 6))).toISOString().split('T')[0],
        currentTime: (new Date((new Date()).getTime() - ((60 * 60 * 1000) * 6))).toISOString().split('T')[1].substring(0, 5),
        skillLevel:"",
        eventDescription:""
    });

    useEffect(() => {
        initializeForm();
    }, [data]);


    const initializeForm = () => {
        if (data) {
            // console.log("Date: ", data.dateTimeString);
            let dateTimeObject = new Date(data.dateTimeString);

            //convert GMT time to CST
            let test = dateTimeObject.toLocaleString('en-US', {timeZone: 'CST', hour12: false});
            const [first, second] = test.split(',').map(item => item.trim());
            let [month, day, year] = first.split('/');
            let [hours, minutes, seconds] = second.split(':');

            //0 padding
            month = month.padStart(2, '0');
            day = day.padStart(2, '0');
            hours = hours.padStart(2, '0');

            setFormData(prevFormData => ({
                ...prevFormData,
                eventName: `${data.name}`,
                eventLocation: `${data.location}`,
                eventCapacity: `${data.maxCap}`,
                dateString: `${year}-${month}-${day}`,
                timeString: `${hours}:${minutes}:${seconds}`,
                imageFile: null,
                skillLevel: data.skillLevel,
                eventDescription: data.desc
            }));
        }
    };
    const clearStates = () => {
        initializeForm();
        setValidated(false);
        setSubmissionStatus(0);
    };
    const editingEventElement = (<div className="editing-event-container">
            <p className="editing-event-text">
                Editing Event...
            </p>
            <div className="submission-status-icon">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Editing Event...</span>
                </Spinner>
            </div>
        </div>
    );


    //0->not submitted, 1-> submitting
    let [submissionStatus, setSubmissionStatus] = useState(0);
    const [validated, setValidated] = useState(false);


    const handleChange = (event) => {
        const {name, value, type, files} = event.target;

        //console.log(formData);
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
            return;
        }


        //create event based on form input
        const eventDateTime = new Date(`${formData.dateString} ${formData.timeString}`);
        const dateTimeString = eventDateTime.toUTCString();
        const newEvent = {
            ...data,
            name: formData.eventName,
            maxCap: formData.eventCapacity,
            location: formData.eventLocation,
            dateTimeString: dateTimeString,
            skillLevel: formData.skillLevel,
            desc:formData.eventDescription
        };

        console.log("new event: ", newEvent);


        //call parent's function to submit event to database
        try {
            const submissionResult = await handleSubmit(newEvent, formData.imageFile);
            console.log(submissionResult);
            setSubmissionStatus(0);

            setTimeout(() => {
                clearStates();

                //close modal
                handleClose();
            }, 1000);


        } catch (error) {
            console.log(error);
            setSubmissionStatus(0);
        }


    };
    return (
        <Modal show={show} onHide={() => {
            clearStates();
            handleClose();
        }} centered backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Edit the event</Modal.Title>
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

                    <Form.Group className="mb-3" controlId="event-description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            as="textarea"
                            rows={3}
                            name="eventDescription"
                            value={formData.eventDescription}
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
                            name="eventCapacity"
                            value={formData.eventCapacity}
                            onChange={handleChange}
                            required
                            autoFocus
                        />
                        <Form.Control.Feedback type="invalid">Please provide a valid number of
                            attendees.</Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="event-date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            type="date"
                            name="dateString"
                            onChange={handleChange}
                            value={formData.dateString}
                            min={formData.currentDate}
                            autoFocus
                            required
                        />
                        <Form.Control.Feedback type="invalid">Please provide a valid date.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="event-time">
                        <Form.Label>Time</Form.Label>
                        <Form.Control
                            type="time"
                            name="timeString"
                            onChange={handleChange}
                            value={formData.timeString}
                            min={formData.dateString === formData.currentDate ? formData.currentTime : "00:00"}
                            autoFocus
                            required
                        />
                        <Form.Control.Feedback type="invalid">Please provide a valid time.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="event-time">
                        <Form.Label>Skill Level:</Form.Label>
                        <Form.Select aria-label="Default select example" value={formData.skillLevel} onChange={handleChange} name="skillLevel" required>
                            <option value="">-- choose a skill level --</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">Please select a skill level</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="upload-image">
                        <Form.Label>Update Cover Image (Optional)</Form.Label>
                        <Form.Control type="file" name="imageFile" onChange={handleChange} accept="image/*"/>
                    </Form.Group>

                    <div className="submission-status">

                        {
                            submissionStatus === 1 && editingEventElement
                        }
                    </div>


                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" type="submit" form="create-event-form" disabled={submissionStatus !== 0}>
                    Update Event
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditEventModal;