// Event List
import { useState, React } from "react";
import { Button, Form } from "react-bootstrap";
import EventCard from "./EventCard";
import EventModal from "./EventModal";
import eventData from "../../utilities/data/eventData.json";
import "./EventList.css";

function EventList() {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    console.log("Button clicked");
    setOpen(true);
    console.log(open);
  };
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

      <EventModal open={open} close={closeModal}></EventModal>

      {eventData.events.map((e) => (
        <EventCard key={e.id} openModal={openModal} cardData={e} />
      ))}
    </div>
  );
}

export default EventList;
