// Event List
import React, {useEffect, useState} from "react";
import {
    addNewEvent, deleteEvent,
    deleteEventFromUsers, deleteFile,
    getImageLinkOfExistingImage,
    getNewEventKey,
    joinEvent,
    updateEvent,
    uploadFile
} from "../../utilities/firebase";
import {Button, Form, Stack} from "react-bootstrap";
import EventCard from "./EventCard";
import EventModal from "./EventModal";
import AddEventModal from "./AddEventModal";
import "./EventList.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import DeleteEventModal from "./DeleteEventModal";
import EditEventModal from "./EditEventModal";


const EventList = ({eventData, user, allUsers}) => {
    const [showSeeMoreModal, setShowSeeMoreModal] = useState(false);
    const [showAddEventModal, setShowAddEventModal] = useState(false);
    const [showDeleteEventModal, setShowDeleteEventModal] = useState(false);
    const [showEditEventModal, setShowEditEventModal] = useState(false);
    const [events, setEvents] = useState([]);
    const [modalDataSeeMore, setModalDataSeeMore] = useState([]);
    const [eventToDelete, setEventToDelete] = useState(null);
    const [eventToEdit, setEventToEdit] = useState(null);

    console.log("events: ", events);

    const [searchFilter, setSearchFilter] = useState("");
    const [defaultCoverURL, setDefaultCoverURL] = useState("");
    console.log("default cover: ", defaultCoverURL);
    useEffect(() => {
        getImageLinkOfExistingImage("default-cover.png")
            .then((url) => {
                setDefaultCoverURL(url);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const handleJoinEvent = async (data) => {
        //returns status code:
        // 1->success, 2->generic failure, 3->failure trying to join own event
        // 4->failure trying to join an event the user is part of, 5->failure trying to join an event with no available spot

        /*
            1. Make sure we cannot join our own event
            2. Make sure we cannot join an event we are already a part of
            3. Update spots available after joining it
        */

        //make sure not joining our own event
        if (data.owner === user.uid) {
            return 3;
        }

        //make sure not joining an event the user is already part of
        if (data.participants.includes(user.uid)) {
            return 4;
        }

        //make sure not joining an event that's full
        if (data.participants.length >= data.maxCap) {

            return 5;
        }
        const ueid = data.id;
        const updatedParticipants = {
            participants: [...data.participants, user.uid],
        };


        let updatedUserEvents;
        if (!allUsers[user.uid].events) {
            updatedUserEvents = {
                events: [ueid],
            };
        } else {
            updatedUserEvents = {
                events: [...allUsers[user.uid].events, ueid],
            };
        }

        let joinResult = await joinEvent(
            updatedParticipants,
            updatedUserEvents,
            ueid,
            user.uid
        );
        return joinResult ? 1 : 0;
    };

    const handleCloseSeeMoreModal = () => {
        setShowSeeMoreModal(false);
    };
    const handleShowSeeMoreModal = (data) => {
        setModalDataSeeMore(data);
        setShowSeeMoreModal(true);
    };
    const handleCloseAddEventModal = () => setShowAddEventModal(false);
    const handleShowAddEventModal = (data) => {
        setShowAddEventModal(true);
    };
    const handleCloseDeleteEventModal = () => setShowDeleteEventModal(false);
    const handleShowDeleteEventModal = () => {
        setShowDeleteEventModal(true);
    };

    const handleSetEventToDelete = (event) => {
        setEventToDelete(event);
    };

    const handleShowEditEventModal = () => {
        setShowEditEventModal(true);
    };

    const handleCloseEditEventModal = () => {
        setShowEditEventModal(false);
    };

    const handleSetEventToEdit = (event) => {
        setEventToEdit(event);
    };
    const handleDeleteEvent = async () => {
        //get the list of event participants
        console.log("Event participants: ", eventToDelete.participants);
        let newParticipantsEvent = eventToDelete.participants.map((participantId) => {
            let userCurrentEvents = allUsers[participantId].events;
            let userNewEvents = userCurrentEvents.filter((eventId) => eventId !== eventToDelete.id);
            return {events: userNewEvents};

        });

        console.log("New participants events: ", newParticipantsEvent);
        await deleteEventFromUsers(eventToDelete.participants, newParticipantsEvent);
        let deleteResult = await deleteEvent(eventToDelete.id);

        if (eventToDelete.imgSrc !== defaultCoverURL) { //make sure we don't delete the default image cover in storage
            await deleteFile(eventToDelete.imgSrc);
        }

        //NOTE: for whatever reason, the UI won't update with firebase when the only item in the list gets deleted,
        // so we handle the edge case by doing this:
        if (events.length === 1) {
            setEvents([]);
        }
        return deleteResult;

    };
    const handleAddEventSubmit = async (newEventData, imageFile) => {
        const acceptedFileTypes = ["image/gif", "image/jpeg", "image/png"];
        if (imageFile && acceptedFileTypes.includes(imageFile.type)) { //if the user uploaded a file
            let [isSuccessful, fileLink] = await uploadFile(imageFile);
            //console.log("Successful? ", isSuccessful);
            if (isSuccessful) {
                newEventData.imgSrc = fileLink;
                newEventData.owner = user.uid;
            }
        } else { //set image link to default image
            let fileLink = defaultCoverURL;
            newEventData.imgSrc = fileLink;
        }

        //get key from database
        let newEventKey = getNewEventKey();

        //append id to new event
        newEventData.id = newEventKey;
        newEventData.participants.push(user.uid);
        //console.log("new event object: ", newEventData);


        let updatedUserEvents;
        if (!allUsers[user.uid].events) {
            updatedUserEvents = {
                events: [newEventKey],
            };
        } else {
            updatedUserEvents = {
                events: [...allUsers[user.uid].events, newEventKey],
            };
        }

        //submit new event to database
        addNewEvent(newEventData, newEventKey, updatedUserEvents, user.uid);
    };

    const handleEditEventSubmit = async (newEventData, imageFile) => {
        const acceptedFileTypes = ["image/gif", "image/jpeg", "image/png"];

        if (imageFile && acceptedFileTypes.includes(imageFile.type)) { //if the user uploaded a file
            let [isSuccessful, fileLink] = await uploadFile(imageFile);
            //console.log("Successful? ", isSuccessful);
            if (isSuccessful) {
                newEventData.imgSrc = fileLink;
            }
        }

        //update event
        await updateEvent(newEventData, newEventData.id);

    };
    const handleSearch = () => {
        //search events based on filter
        let searchTerms = searchFilter.split(" ").map((word) => word.toLowerCase());
        setEvents(prevState => {
            return prevState.filter((event) => {
                let eventName = event.name.toLowerCase();

                let isMatch = searchTerms.some((term) => eventName.includes(term));

                return isMatch;
            });
        });
    };

    const handleKeyPress = (e) => {
        if (event.key === 'Enter') {
            e.preventDefault();
            handleSearch();
        }
    };

    useEffect(() => {
        console.log("Use effect runs");
        console.log("Event data: ", eventData);
        eventData && setEvents(Object.values(eventData));
    }, [searchFilter, eventData]);

    return (
        <div className="event-list">
            <div className="event-list-tool-bar">
                <Form className="d-flex">
                    <Stack direction="horizontal" gap={2}>
                        <Form.Control
                            type="search"
                            placeholder="Search for an activity"
                            className="me-2"
                            aria-label="Search"
                            value={searchFilter}
                            onKeyPress={(e) => handleKeyPress(e)}
                            onChange={(e) => setSearchFilter(e.target.value)}
                        />
                        <Button
                            className="search-button"
                            aria-label="Search"
                            variant="outline-success"
                            onClick={handleSearch}
                        >
                            Search
                        </Button>
                        <Button className="add-event-button" aria-label="Add event" onClick={handleShowAddEventModal}>
                            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                            Add Event
                        </Button>
                    </Stack>

                </Form>


            </div>

            <EventModal
                show={showSeeMoreModal}
                handleJoin={handleJoinEvent}
                handleClose={handleCloseSeeMoreModal}
                data={modalDataSeeMore}
                allUsers={allUsers}
            />
            <AddEventModal
                show={showAddEventModal}
                handleClose={handleCloseAddEventModal}
                handleSubmit={handleAddEventSubmit}
                user={user}
            />

            <DeleteEventModal
                show={showDeleteEventModal}
                handleClose={handleCloseDeleteEventModal}
                handleDelete={handleDeleteEvent}
            />

            <EditEventModal
                show={showEditEventModal}
                handleClose={handleCloseEditEventModal}
                handleSubmit={handleEditEventSubmit}
                data={eventToEdit}
            />
            {!events || events.length === 0 ? (
                <p className="empty-page-message">No events to display...</p>
            ) : (
                events.map((e) => (
                    <EventCard
                        openModal={handleShowSeeMoreModal}
                        openDeleteEventModal={handleShowDeleteEventModal}
                        handleSetEventToDelete={handleSetEventToDelete}
                        handleSetEventToEdit={handleSetEventToEdit}
                        openEditEventModal={handleShowEditEventModal}
                        key={e.id}
                        cardData={e}
                        user={user}
                    />
                ))
            )}
        </div>
    );
};

export default EventList;
