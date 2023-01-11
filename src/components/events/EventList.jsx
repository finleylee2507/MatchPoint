// Event List
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import EventCard from './EventCard'
import eventData from '../../utilities/data/eventData.json'
import EventModal from './EventModal'
import './EventList.css'

function EventList() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="eventList">
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search for an activity"
                    className="me-2"
                    aria-label="Search"
                />
                <Button className="search-button" variant="outline-success">Search</Button>
            </Form>
            <EventModal show={show} handleClose={handleClose} />
            {eventData.events.map(e => (<EventCard openModal={handleShow} key={e.id} cardData={e} />))}
        </div>
    )
}

export default EventList;
