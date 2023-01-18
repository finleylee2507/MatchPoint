import React, {useState} from "react";
import {Alert, Button, Modal} from "react-bootstrap";

function EventModal({show, handleJoin, handleClose, data, allUsers}) {
    console.log("modal data: ", data);
    const {name, location, maxCap, currCap, participants, id, imgSrc, dateTimeString} = data;
    const [shouldDisplayStatusMsg, setShouldDisplayStatusMsg] = useState(false);
    const [statusMsg, setStatusMsg] = useState(null);
    const dateTime = new Date(dateTimeString)
    console.log("participants: ", participants);
    console.log("All users: ", allUsers);


    const joinEventSuccessElement = (
        <Alert key="success" variant="success">
            Successfully joined event!
        </Alert>
    );

    const joinEventFailureElement = (
        <Alert key="danger" variant="danger">
            Hmm something went wrong... Please check and try again.
        </Alert>
    );
    const handleJoinEvent = async () => {
        let joinResult = await handleJoin(data);
        console.log("Join result: ", joinResult);

        setStatusMsg(joinResult ? joinEventSuccessElement : joinEventFailureElement);
        setShouldDisplayStatusMsg(true);

        setTimeout(() => {

            //clear states
            setShouldDisplayStatusMsg(false);
            setStatusMsg(null);
            //close modal
            handleClose();
        }, 2000);

    };
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
                <p>Location: {location}</p>
                <span>Participants: </span>

                {participants &&
                    participants.map((id) => allUsers[id].displayName).join(", ")}
                <p>Spots Available: {participants?maxCap - participants.length:maxCap}</p>
                <p>Time: {dateTime.toLocaleString("en-US", {
                            month: "long",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            hour12: false,
                            timeZone: 'CST'
                        })} CST
                </p>
                {shouldDisplayStatusMsg && statusMsg}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleJoinEvent} disabled={shouldDisplayStatusMsg}>
                    Join Event
                </Button>


            </Modal.Footer>
        </Modal>
    );
}

export default EventModal;
