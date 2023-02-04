import React, { useState } from "react";
import { Alert, Button, Form, Modal, Spinner } from "react-bootstrap";
import "./AddEventModal.css";
import { getNewMessageKey } from "../../utilities/firebase";

const AddEventModal = ({
  show,
  handleClose,
  handleSubmit,
  user,
  checkConflict,
  createConfirmationModal,
}) => {
  const [formData, setFormData] = useState({
    //used to store form data
    eventName: "",
    eventLocation: "",
    eventCapacity: 0,
    imageFile: "",
    dateString: "",
    timeString: "",
    currentDate: new Date(new Date().getTime() - 60 * 60 * 1000 * 6)
      .toISOString()
      .split("T")[0],
    currentTime: new Date(new Date().getTime() - 60 * 60 * 1000 * 6)
      .toISOString()
      .split("T")[1]
      .substring(0, 5),
    skillLevel: "",
    eventDescription: "",
    eventDuration: "",
  });

  const clearStates = () => {
    setFormData({
      eventName: "",
      eventLocation: "",
      eventCapacity: 0,
      dateString: "",
      timeString: "",
      currentDate: new Date(new Date().getTime() - 60 * 60 * 1000 * 6)
        .toISOString()
        .split("T")[0],
      currentTime: new Date(new Date().getTime() - 60 * 60 * 1000 * 6)
        .toISOString()
        .split("T")[1]
        .substring(0, 5),
      skillLevel: "",
      eventDescription: "",
      eventDuration: "",
    });
    setValidated(false);
    setSubmissionStatus(0);
  };

  const creatingEventElement = (
    <div className="creating-event-container">
      <p className="creating-event-text">Creating Event...</p>
      <div className="submission-status-icon">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Creating Event...</span>
        </Spinner>
      </div>
    </div>
  );

  //0->not submitted, 1-> submitting
  let [submissionStatus, setSubmissionStatus] = useState(0);
  const [validated, setValidated] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "file" ? files[0] : value,
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
    const eventDateTime = new Date(
      `${formData.dateString} ${formData.timeString}`
    );
    const dateTimeString = eventDateTime.toUTCString();
    const newEvent = {
      name: formData.eventName,
      maxCap: parseInt(formData.eventCapacity, 10),
      location: formData.eventLocation,
      owner: user.uid,
      //uncollected fields that exist in database
      activity: "",
      desc: formData.eventDescription,
      imgSrc: "",
      privacy: 0,
      participants: [],
      dateTimeString: dateTimeString,
      skillLevel: formData.skillLevel,
      duration: formData.eventDuration,
    };

    //check if the to-be-created event conflicts with any current events
    let [isConflict, conflictingEventName] = checkConflict(newEvent);
    let shouldCreate = true;

    if (isConflict) {
      shouldCreate = await createConfirmationModal({
        isShow: true,
        conflictingEventName: conflictingEventName,
        actionItem: "create",
      });
    }

    if (shouldCreate) {
      const newMessage = {
        content: `You have successfully created the event '${formData.eventName}'`,
        title: "Event Successfully Created",
      };

      //call parent's function to submit event to database
      try {
        await handleSubmit(newEvent, newMessage, formData.imageFile);

        clearStates();

        //close modal
        handleClose();
      } catch (error) {
        console.log(error);
        setSubmissionStatus(0);
      }
    } else {
      //if the user selects "no"
      clearStates();
      handleClose();
    }
  };
  return (
    <Modal
      show={show}
      onHide={() => {
        clearStates();
        handleClose();
      }}
      centered
      backdrop="static"
      fullscreen="sm-down"
      scrollable="true"
    >
      <Modal.Header closeButton>
        <Modal.Title>Create an event</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          noValidate
          validated={validated}
          onSubmit={createEvent}
          id="create-event-form"
        >
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
            <Form.Control.Feedback type="invalid">
              Please provide an event name.
            </Form.Control.Feedback>
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
            <Form.Control.Feedback type="invalid">
              Please provide a location.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="event-capacity">
            <Form.Label>Capacity</Form.Label>
            <Form.Control
              type="number"
              min="1"
              max="100"
              step="1"
              name="eventCapacity"
              value={formData.eventCapacity}
              onChange={handleChange}
              required
              autoFocus
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid number of attendees.
            </Form.Control.Feedback>
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
            <Form.Control.Feedback type="invalid">
              Please provide a valid date.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="event-time">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="time"
              name="timeString"
              onChange={handleChange}
              value={formData.timeString}
              min={
                formData.dateString === formData.currentDate
                  ? formData.currentTime
                  : "00:00"
              }
              autoFocus
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid time.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="event-duration">
            <Form.Label>Duration (hour)</Form.Label>
            <Form.Control
              type="number"
              min="1"
              max="10"
              step="0.1"
              name="eventDuration"
              value={formData.eventDuration}
              onChange={handleChange}
              required
              autoFocus
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid duration of event.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="event-time">
            <Form.Label>Skill Level:</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={formData.skillLevel}
              onChange={handleChange}
              name="skillLevel"
              required
            >
              <option value="">-- choose a skill level --</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select a skill level
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="upload-image">
            <Form.Label>Upload Cover Image (Optional)</Form.Label>
            <Form.Control
              type="file"
              name="imageFile"
              onChange={handleChange}
              accept="image/*"
            />
          </Form.Group>

          <div className="submission-status">
            {submissionStatus === 1 && creatingEventElement}
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          type="submit"
          form="create-event-form"
          className="create-event-button"
          disabled={submissionStatus !== 0}
        >
          Create Event
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddEventModal;
