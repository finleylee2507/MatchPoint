// Event List
import React, {useEffect, useState} from 'react';
import {addNewEvent,getNewEventKey} from "../../utilities/firebase";
import {Button, Form} from 'react-bootstrap';
import EventCard from './EventCard';
import EventModal from './EventModal';
import AddEventModal from "./AddEventModal";
import './EventList.css';


function EventList({eventData}) {
    const [showSeeMoreModal, setShowSeeMoreModal] = useState(false);
    const [showAddEventModal, setShowAddEventModal] = useState(false);
    const [events, setEvents] = useState([]);
    const [modalDataSeeMore, setModalDataSeeMore] = useState([]);
    console.log("events: ", events);
    const [searchFilter, setSearchFilter] = useState("");

    const handleCloseSeeMoreModal = () => setShowSeeMoreModal(false);
    const handleShowSeeMoreModal = (data) => {
        setModalDataSeeMore(data);
        setShowSeeMoreModal(true);
    };
    const handleCloseAddEventModal = () => setShowAddEventModal(false);
    const handleShowAddEventModal = (data) => {
        setShowAddEventModal(true);
    };
    const handleAddEventSubmit=(newEventData)=>{
        console.log("submit");

        //submit event to database
        let newEventKey=getNewEventKey()

        //append id to new event
        newEventData.id=newEventKey

        console.log("new event object: ",newEventData);

        addNewEvent(newEventData,newEventKey)
    }
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
        eventData && setEvents(Object.values(eventData));
    }, [searchFilter, eventData]);


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
                <Button className="add-event-button" variant="outline-success"
                        onClick={handleShowAddEventModal}>Add Event</Button>
            </Form>
            <EventModal show={showSeeMoreModal} handleClose={handleCloseSeeMoreModal} data={modalDataSeeMore}/>
            <AddEventModal show={showAddEventModal} handleClose={handleCloseAddEventModal} handleSubmit={handleAddEventSubmit}/>
            {(!events || events.length === 0) ?
                <p className="empty-page-message">No events to display...</p> : events.map(e => (
                    <EventCard openModal={handleShowSeeMoreModal} key={e.id} cardData={e}/>))}
        </div>

    );
}

export default EventList;
