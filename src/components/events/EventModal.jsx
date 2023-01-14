import React from 'react'
import {Button, Modal} from 'react-bootstrap'

function EventModal({show, handleClose, data}) {
    console.log("modal data: ",data);
    const {name, location, max_cap, cur_cap} = data
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
                <p>Spots Available: {max_cap - cur_cap}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Join Event
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EventModal
