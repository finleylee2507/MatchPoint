// Event List
import React from 'react'
import {Button, Form} from 'react-bootstrap'
import EventCard from './Event'
import eventData from '../../utilities/data/eventData.json'
import './EventList.css'

function EventList() {
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
            {eventData.events.map(e => (<EventCard key={e.id} cardData={e}/>))}
        </div>
    )
}

// const _styles = {
//     eventList: {
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         paddingTop: '20px',
//     }
// }

export default EventList