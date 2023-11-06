import React, {useEffect, useState} from "react";
import {Container, create} from "react-modal-promise";
import "./Profile.css";
import UserEventCard from "./UserEventCard";
import ParticipantsModal from "../events/ParticipantsModal";
import DeleteEventModal from "../events/DeleteEventModal";
import EditEventModal from "../events/EditEventModal";
import joinCreateConfirmationModal from "../events/JoinCreateConfirmationModal";
import {
    deleteEvent,
    deleteEventFromUsers,
    deleteEventMessage,
    deleteFile,
    getImageLinkOfExistingImage,
    getNewMessageKey,
    joinEvent,
    joinLeaveEventMessage,
    updateEvent,
    uploadFile,
} from "../../utilities/firebase";
import {toast} from "react-toastify";
import "./UserEventList.css";

const UserEventList = ({events, renderEvents, user, users}) => {
    const [showParticipantsModal, setShowParticipantsModal] = useState(false);
    const [eventToShowParticipants, setEventToShowParticipants] = useState(null);
    const [showDeleteEventModal, setShowDeleteEventModal] = useState(false);
    const [showEditEventModal, setShowEditEventModal] = useState(false);
    const [eventToDelete, setEventToDelete] = useState(null);
    const [eventToEdit, setEventToEdit] = useState(null);
    const [defaultCoverURL, setDefaultCoverURL] = useState("");
    const confirmationModal = create(joinCreateConfirmationModal);

    useEffect(() => {
        getImageLinkOfExistingImage("default-cover.png")
            .then((url) => {
                setDefaultCoverURL(url);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const handleShowParticipantsModal = () => {
        setShowParticipantsModal(true);
    };
    const handleCloseParticipantsModal = () => {
        setShowParticipantsModal(false);
    };
    const handleSetEventToShowParticipants = (data) => {
        setEventToShowParticipants(data);
    };

    const handleCloseDeleteEventModal = () => setShowDeleteEventModal(false);
    const handleShowDeleteEventModal = () => {
        setShowDeleteEventModal(true);
    };

    const handleLeaveEvent = async (data) => {
        let currParticipants = data.participants;
        let currUserEvents = users[user.uid].events;
        console.log("Curr user events: ", currUserEvents);
        console.log("Curr participants: ", currParticipants);
        let ueid = data.id;

        let updatedParticipants = {
            participants: currParticipants.filter(
                (participant) => participant !== user.uid
            ),
        }; //remove current user from the list
        let updatedUserEvents = {
            events: currUserEvents.filter((eventId) => eventId !== ueid),
        }; //remove current event from user's event list

        console.log("Updated participants: ", updatedParticipants);
        console.log("Updated events: ", updatedUserEvents);
        let leaveResult = await joinEvent(
            updatedParticipants,
            updatedUserEvents,
            ueid,
            user.uid
        );

        // Message logic
        // Get a new message key
        let newMessageKey = getNewMessageKey();

        // Create a new message for the general messages table
        let newJoinMessage = {
            title: `A Participant Left the Event "${data.name}"`,
            id: newMessageKey,
            content: `Oh no! ${users[user.uid].displayName} just left the event "${
                data.name
            }". Goodbyes are always hard and we're so sad to see you go ${
                users[user.uid].displayName
            } :(. `,
            timeStamp: new Date().toUTCString(),
        };

        // Create an updated list of unread messages for the current user (joiner)
        let userUpdatedUnreadMessages = {
            unreadMessages: [...users[user.uid].unreadMessages, newMessageKey],
        };

        // Create an updated list of unread messages for the owner of the event
        let ownerUpdatedUnreadMessages = {
            unreadMessages: [...users[data.owner].unreadMessages, newMessageKey],
        };

        joinLeaveEventMessage(
            newJoinMessage, // general table
            ownerUpdatedUnreadMessages, // updated owner
            userUpdatedUnreadMessages, // updated user
            newMessageKey,
            data.owner,
            user.uid
        );
        if (leaveResult) {
            toast.success("Successfully left event!", {
                position: toast.POSITION.TOP_RIGHT,
            });
        } else {
            toast.error(
                "Hmm...Something went wrong. Please try again or contact the dev team.",
                {
                    position: toast.POSITION.TOP_RIGHT,
                }
            );
        }
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
        let newParticipantsEvent = eventToDelete.participants.map(
            (participantId) => {
                let userCurrentEvents = users[participantId].events;
                let userNewEvents = userCurrentEvents.filter(
                    (eventId) => eventId !== eventToDelete.id
                );
                return {events: userNewEvents};
            }
        );

        await deleteEventFromUsers(
            eventToDelete.participants,
            newParticipantsEvent
        );
        let deleteResult = await deleteEvent(eventToDelete.id);

        if (eventToDelete.imgSrc !== defaultCoverURL) {
            //make sure we don't delete the default image cover in storage
            await deleteFile(eventToDelete.imgSrc);
        }

        //NOTE: for whatever reason, the UI won't update with firebase when the only item in the list gets deleted,
        // so we handle the edge case by doing this:
        if (events.length === 1) {
            setEvents([]);
        }

        //Message logic
        //Get a new message key
        let newMessageKey = getNewMessageKey();

        //create new message
        const newMessage = {
            content: `We're sorry to inform you the event '${eventToDelete.name}' that you're a part of has been cancelled. Please keep an eye out for new available events, or you can create one yourself! `,
            title: `Event "${eventToDelete.name}" Cancelled`,
            id: newMessageKey,
            timeStamp: new Date().toUTCString(),
        };

        let updatedParticipantsMessages = eventToDelete.participants.map(
            (participant) => {
                let newMessages = [...users[participant].unreadMessages, newMessageKey];
                return {unreadMessages: newMessages};
            }
        );

        deleteEventMessage(
            newMessage,
            updatedParticipantsMessages,
            eventToDelete.participants,
            newMessageKey
        );

        if (deleteResult) {
            toast.success("Successfully deleted event!", {
                position: toast.POSITION.TOP_RIGHT,
            });
        } else {
            toast.error(
                "Hmm...Something went wrong. Please try again or contact the dev team.",
                {
                    position: toast.POSITION.TOP_RIGHT,
                }
            );
        }
    };

    const handleEditEventSubmit = async (newEventData, imageFile) => {
        const acceptedFileTypes = ["image/gif", "image/jpeg", "image/png"];

        if (imageFile && acceptedFileTypes.includes(imageFile.type)) {
            //if the user uploaded a file
            let [isSuccessful, fileLink] = await uploadFile(imageFile);
            if (isSuccessful) {
                newEventData.imgSrc = fileLink;
            }
        }

        //update event
        let editResult = await updateEvent(newEventData, newEventData.id);
        if (editResult) {
            toast.success("Successfully edited event!", {
                position: toast.POSITION.TOP_RIGHT,
            });
        } else {
            toast.error(
                "Hmm...Something went wrong. Please try again or contact the dev team.",
                {
                    position: toast.POSITION.TOP_RIGHT,
                }
            );
        }
    };

    const checkConflict = (data) => {
        let isConflict = false; //make sure we're not joining an event that conflicts with existing events
        let [targetEventStartDate, targetEventEndDate] = calculateDateObjects(data);

        let conflictingEventName;
        if (users[user.uid].events) {
            for (let eventId of users[user.uid].events) {
                //don't check against the event itself
                if (eventId === data.id) {
                    continue;
                }
                //initialize current event
                let currEventObject = events[eventId];
                let [currEventStartDate, currEventEndDate] =
                    calculateDateObjects(currEventObject);

                //check overlap with target event
                if (
                    targetEventStartDate <= currEventEndDate &&
                    targetEventEndDate >= currEventStartDate
                ) {
                    isConflict = true;
                    conflictingEventName = currEventObject.name;
                    break;
                }
            }
        }
        return [isConflict, conflictingEventName];
    };
    const calculateDateObjects = (data) => {
        console.log("Current data: ", data);
        //initialize target event (the one we're trying to join)
        let eventStartDate = new Date(data.dateTimeString);
        let eventDuration = data.duration;
        let eventEndDate = new Date(eventStartDate);

        //get hours
        let eventDurationHour = Math.floor(eventDuration);
        let eventDurationMinutes = Math.round((eventDuration % 1) * 60);

        eventEndDate.setHours(eventStartDate.getHours() + eventDurationHour);

        eventEndDate.setMinutes(eventEndDate.getMinutes() + eventDurationMinutes);

        return [eventStartDate, eventEndDate];
    };

    return events && renderEvents ? (
        <div className="user-profile-events-container">
            <Container/>
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
                user={user}
                allEvents={events}
                checkConflict={checkConflict}
                createConfirmationModal={confirmationModal}
            />
            <ParticipantsModal
                show={showParticipantsModal}
                handleClose={handleCloseParticipantsModal}
                data={eventToShowParticipants}
                allUsers={users}
            />
            {renderEvents.map((event) => (
                <UserEventCard
                    key={event}
                    allUsers={users}
                    user={user}
                    event={events[event]}
                    handleShowParticipantsModal={handleShowParticipantsModal}
                    handleSetEventToShowParticipants={handleSetEventToShowParticipants}
                    handleSetEventToDelete={handleSetEventToDelete}
                    openDeleteEventModal={handleShowDeleteEventModal}
                    handleSetEventToEdit={handleSetEventToEdit}
                    openEditEventModal={handleShowEditEventModal}
                    handleLeave={handleLeaveEvent}
                />
            ))}
        </div>
    ) : (
        <div className="">
            <p>Unable to display profile...</p>
        </div>
    );
};

export default UserEventList;
