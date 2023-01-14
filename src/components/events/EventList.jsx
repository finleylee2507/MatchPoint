// Event List
import React, {useEffect, useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import EventCard from './EventCard';
import eventData from '../../utilities/data/eventData.json';
import EventModal from './EventModal';
import './EventList.css';

function EventList() {
    const [show, setShow] = useState(false);
    const [events, setEvents] = useState([]);
    const [searchFilter, setSearchFilter] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSearch = () => {
        //search events based on filter
        let searchTerms = searchFilter.split(" ").map(word => word.toLowerCase());
        console.log("search terms:", searchTerms);
        let newEventList = events.filter(event => {
            let eventName = event.name.toLowerCase();

            let isMatch = searchTerms.some(term => eventName.includes(term));


            return isMatch;
        });

        setEvents(newEventList);
    };

    useEffect(() => {
        setEvents(eventData.events);
    }, [searchFilter]);
    return (
        <div className="eventList">
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search for an activity"
                    className="me-2"
                    aria-label="Search"
                    value={searchFilter}
                    onChange={e => setSearchFilter(e.target.value)}
                />
                <Button className="search-button" variant="outline-success" onClick={handleSearch}>Search</Button>
            </Form>
            <EventModal show={show} handleClose={handleClose} data={eventData.events[0]}/>
            {events.map(e => (<EventCard openModal={handleShow} key={e.id} cardData={e}/>))}
        </div>
    );
}

export default EventList;
