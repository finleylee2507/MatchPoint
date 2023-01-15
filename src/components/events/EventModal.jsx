import React from 'react';
import {Button, Modal} from 'react-bootstrap';

function EventModal({show, handleClose, data}) {
    console.log("modal data: ", data);
    const {name, location, maxCap, currCap} = data;
    return (
        <Modal show={show} onHide={handleClose} info={data} centered>
            <Modal.Header closeButton>
                <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Location: {location}</p>
                <span>Participants: </span>
                Not yet implemented
                {/*{users.map(user => <span> user's name,</span>)}*/}
                <p>Spots Available: {maxCap - currCap}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Join Event
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EventModal;
