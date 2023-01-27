import React, {useState} from "react";
import {Alert, Button, Modal} from "react-bootstrap";

function EventModal({show, handleJoin, handleClose, data, allUsers}) {
    // console.log("modal data: ", data);
    const {name, location, maxCap, participants, dateTimeString, owner} = data;
    const [shouldDisplayStatusMsg, setShouldDisplayStatusMsg] = useState(false);
    const [statusMsg, setStatusMsg] = useState(null);
    const dateTime = new Date(dateTimeString);
    //console.log("participants: ", participants);
    // console.log("All users: ", allUsers);
    // console.log("Owner:",owner);


    const joinEventSuccessElement = (
        <Alert key="success" variant="success">
            Successfully joined event!
        </Alert>
    );

    const joinEventFailureElementGeneric = (
        <Alert key="danger" variant="danger">
            Hmm something went wrong... Please check and try again.
        </Alert>
    );

    const joinEventFailureElementOwnEvent = (
        <Alert key="danger" variant="danger">
            Error: you can't join an event that you created!
        </Alert>
    );

    const joinEventFailureElementParticipants = (
        <Alert key="danger" variant="danger">
            Error: you can't join an event that you're already a part of!
        </Alert>
    );

    const joinEventFailureElementEventFull = (
        <Alert key="danger" variant="danger">
            Sorry the event has no available spots left...
        </Alert>
    );


    return (
        <Modal
            show={show}
            onHide={handleClose}
            info={data}
            centered
            backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <span>Location:{location}</span>
                <br/>
                {owner && <span>Owner: {allUsers[owner].displayName}</span>}
                <br/>
                <span>Participants: </span>

                {participants &&
                    participants.map((id) => allUsers[id].displayName).join(", ")}
                <p>Spots Available: {participants ? maxCap - participants.length : maxCap}</p>
                <p>Time: {dateTime.toLocaleString("en-US", {
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: false,
                    timeZone: 'CST'
                })} CST
                </p>

            </Modal.Body>
            {/*<Modal.Footer>*/}
            {/*  */}


            {/*</Modal.Footer>*/}
        </Modal>
    );
}

export default EventModal;
