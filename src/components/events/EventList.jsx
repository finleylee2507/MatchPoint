// Event List
import { useState, React } from "react";
import { Button, Form } from "react-bootstrap";
import EventCard from "./EventCard";
import EventModal from "./EventModal";
import eventData from "../../utilities/data/eventData.json";
import "./EventList.css";

function EventList() {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);

  const closeModal = () => setOpen(false);

  return (
    <div className="eventList">
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search anything"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>

      <EventModal show={open} handleClose={closeModal}></EventModal>

      {eventData.events.map((e) => (
        <EventCard key={e.id} openModal={openModal} cardData={e} />
      ))}
    </div>
  );
}

export default EventList;
