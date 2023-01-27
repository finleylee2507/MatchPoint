// Event List
import React, {useEffect, useState} from "react";
import {
    addNewEvent,
    deleteEvent,
    deleteEventFromUsers,
    deleteFile,
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
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

        console.log("Joining");
        //make sure not joining an event that's full
        if (data.participants.length >= data.maxCap) {
            toast.error("Sorry the event is full!", {
                position: toast.POSITION.TOP_RIGHT
            });
            return;
        }
        const ueid = data.id;
        const updatedParticipants = {
            participants: [...data.participants, user.uid],
        };

        console.log("Updated participants: ", updatedParticipants);
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

        if (!joinResult) {
            toast.error("Hmm...Something went wrong. Please try again or contact the dev team.", {
                position: toast.POSITION.TOP_RIGHT
            });

            return;
        }

        toast.success("Successfully joined event!", {
            position: toast.POSITION.TOP_RIGHT
        });

    };

    const handleLeaveEvent = async (data) => {
        let currParticipants = data.participants;
        let currUserEvents = allUsers[user.uid].events;
        console.log("Curr user events: ", currUserEvents);
        console.log("Curr participants: ", currParticipants);
        let ueid = data.id;


        //TODO: what happens if the creator of the event tries to leave the event, and he's the only participant
        let updatedParticipants = {participants: currParticipants.filter((participant) => participant !== user.uid)}; //remove current user from the list
        let updatedUserEvents = {events: currUserEvents.filter((eventId) => eventId !== ueid)}; //remove current event from user's event list

        console.log("Updated participants: ", updatedParticipants);
        console.log("Updated events: ", updatedUserEvents);
        let leaveResult = await joinEvent(
            updatedParticipants,
            updatedUserEvents,
            ueid,
            user.uid
        );

        if (leaveResult) {
            toast.success("Successfully left event!", {
                position: toast.POSITION.TOP_RIGHT
            });

        } else {
            toast.error("Hmm...Something went wrong. Please try again or contact the dev team.", {
                position: toast.POSITION.TOP_RIGHT
            });
        }
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

        if (deleteResult) {
            toast.success("Successfully deleted event!", {
                position: toast.POSITION.TOP_RIGHT
            });
        } else {
            toast.error("Hmm...Something went wrong. Please try again or contact the dev team.", {
                position: toast.POSITION.TOP_RIGHT
            });
        }


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
        try {
            addNewEvent(newEventData, newEventKey, updatedUserEvents, user.uid);
            toast.success("Successfully created event!", {
                position: toast.POSITION.TOP_RIGHT
            });
        } catch (error) {
            console.log(error);
            toast.error("Hmm...Something went wrong. Please try again or contact the dev team.", {
                position: toast.POSITION.TOP_RIGHT
            });

        }

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
        let editResult=await updateEvent(newEventData, newEventData.id);
        if(editResult){
            toast.success("Successfully edited event!", {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else{
            toast.error("Hmm...Something went wrong. Please try again or contact the dev team.", {
                position: toast.POSITION.TOP_RIGHT
            });
        }

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
        eventData && setEvents(Object.values(eventData));
    }, [searchFilter, eventData]);

    return (
        <div className="event-list">
            <ToastContainer/>
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
                        handleLeave={handleLeaveEvent}
                        handleJoin={handleJoinEvent}
                        key={e.id}
                        cardData={e}
                        user={user}
                        allUsers={allUsers}
                    />
                ))
            )}
        </div>
    );
};

export default EventList;
