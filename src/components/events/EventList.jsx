// Event List
import React, { useEffect, useState } from "react";
import {
  addNewEvent,
  createEventMessage,
  deleteEvent,
  deleteEventFromUsers,
  deleteEventMessage,
  deleteFile,
  getImageLinkOfExistingImage,
  getNewEventKey,
  getNewMessageKey,
  joinEvent,
  joinLeaveEventMessage,
  updateEvent,
  uploadFile,
} from "../../utilities/firebase";
import { Button, Form, Stack } from "react-bootstrap";
import EventCard from "./EventCard";
import EventModal from "./EventModal";
import AddEventModal from "./AddEventModal";
import "./EventList.css";
import DeleteEventModal from "./DeleteEventModal";
import EditEventModal from "./EditEventModal";
import "react-toastify/dist/ReactToastify.css";
import ParticipantsModal from "./ParticipantsModal";
import { Container, create } from "react-modal-promise";
import JoinConfirmationModal from "./JoinConfirmationModal";
import { toast, ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const EventList = ({ eventData, user, allUsers }) => {
  const [searchFilter, setSearchFilter] = useState("");
  const [showAddEventModal, setShowAddEventModal] = useState(false);
  const [defaultCoverURL, setDefaultCoverURL] = useState("");
  const [showSeeMoreModal, setShowSeeMoreModal] = useState(false);
  const [showDeleteEventModal, setShowDeleteEventModal] = useState(false);
  const [showEditEventModal, setShowEditEventModal] = useState(false);
  const [showParticipantsModal, setShowParticipantsModal] = useState(false);
  const [events, setEvents] = useState([]);
  const [modalDataSeeMore, setModalDataSeeMore] = useState(null);
  const [eventToShowParticipants, setEventToShowParticipants] = useState(null);
  const [eventToDelete, setEventToDelete] = useState(null);
  const [eventToEdit, setEventToEdit] = useState(null);
  const confirmationModal = create(JoinConfirmationModal);
  const handleCloseAddEventModal = () => setShowAddEventModal(false);
  const handleShowAddEventModal = () => {
    setShowAddEventModal(true);
  };
  const handleAddEventSubmit = async (
    newEventData,
    newMessageData,
    imageFile
  ) => {
    const acceptedFileTypes = ["image/gif", "image/jpeg", "image/png"];
    if (imageFile && acceptedFileTypes.includes(imageFile.type)) {
      //if the user uploaded a file
      let [isSuccessful, fileLink] = await uploadFile(imageFile);
      if (isSuccessful) {
        newEventData.imgSrc = fileLink;
        newEventData.owner = user.uid;
      }
    } else {
      //set image link to default image
      newEventData.imgSrc = defaultCoverURL;
    }

    //get key from database
    let newEventKey = getNewEventKey();

    let newMessageKey = getNewMessageKey();

    //append id to new event
    newEventData.id = newEventKey;
    newEventData.participants.push(user.uid);

    newMessageData.id = newMessageKey;

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

    let updatedUserMessage = {
      unreadMessages: [...allUsers[user.uid].unreadMessages, newMessageKey],
    };

    //submit new event to database
    try {
      addNewEvent(newEventData, newEventKey, updatedUserEvents, user.uid);
      createEventMessage(
        updatedUserMessage,
        newMessageData,
        newMessageKey,
        user.uid
      );
      toast.success("Successfully created event!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.log(error);
      toast.error(
        "Hmm...Something went wrong. Please try again or contact the dev team.",
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
    }
  };

  useEffect(() => {
    eventData && setEvents(Object.values(eventData));
  }, [searchFilter, eventData]);
  useEffect(() => {
    getImageLinkOfExistingImage("default-cover.png")
      .then((url) => {
        setDefaultCoverURL(url);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = () => {
    //search events based on filter
    let searchTerms = searchFilter.split(" ").map((word) => word.toLowerCase());
    setEvents((prevState) => {
      return prevState.filter((event) => {
        let eventName = event.name.toLowerCase();

        return searchTerms.some((term) => eventName.includes(term));
      });
    });
  };
  if (eventData === undefined || user === undefined || allUsers === undefined) {
    return (
      <div className="event-list">
        <ToastContainer autoClose={2000} />
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
              <Button
                className="add-event-button"
                aria-label="Add event"
                onClick={handleShowAddEventModal}
              >
                Add Event
              </Button>
            </Stack>
          </Form>
        </div>
        <p className="empty-page-message">No events to display...</p>
        <AddEventModal
          show={showAddEventModal}
          handleClose={handleCloseAddEventModal}
          handleSubmit={handleAddEventSubmit}
          user={user}
        />
      </div>
    );
  }

  const handleShowParticipantsModal = () => {
    setShowParticipantsModal(true);
  };

  const handleCloseParticipantsModal = () => {
    setShowParticipantsModal(false);
  };

  const handleSetEventToShowParticipants = (data) => {
    setEventToShowParticipants(data);
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
  const checkConflict = (data) => {
    let isConflict = false; //make sure we're not joining an event that conflicts with existing events
    let [targetEventStartDate, targetEventEndDate] = calculateDateObjects(data);

    let conflictingEventName;
    if (allUsers[user.uid].events) {
      for (let eventId of allUsers[user.uid].events) {
        //initialize current event
        let currEventObject = eventData[eventId];
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

  const handleJoinEvent = async (data) => {
    console.log("Joining");
    //make sure not joining an event that's full
    if (data.participants.length >= data.maxCap) {
      toast.error("Sorry the event is full!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    let shouldJoin = true;

    let [isConflict, conflictingEventName] = checkConflict(data);

    if (isConflict) {
      shouldJoin = await confirmationModal({
        isShow: true,
        conflictingEventName: conflictingEventName,
        actionItem: "join",
      });
    }

    if (shouldJoin) {
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

      // Message logic
      // Get a new message key
      let newMessageKey = getNewMessageKey();

      // Create a new message for the general messages table
      let newJoinMessage = {
        title: "New Event Participant",
        id: newMessageKey,
        content: `${allUsers[user.uid].displayName} has joined the event "${
          data.name
        }".`,
      };

      // Create an updated list of unread messages for the current user (joiner)
      let userUpdatedUnreadMessages = {
        unreadMessages: [...allUsers[user.uid].unreadMessages, newMessageKey],
      };

      // Create an updated list of unread messages for the owner of the event
      let ownerUpdatedUnreadMessages = {
        unreadMessages: [...allUsers[data.owner].unreadMessages, newMessageKey],
      };

      let joinResult = await joinEvent(
        updatedParticipants,
        updatedUserEvents,
        ueid,
        user.uid
      );

      joinLeaveEventMessage(
        newJoinMessage, // general table
        ownerUpdatedUnreadMessages, // updated owner
        userUpdatedUnreadMessages, // updated user
        newMessageKey,
        data.owner,
        user.uid
      );

      if (!joinResult) {
        toast.error(
          "Hmm...Something went wrong. Please try again or contact the dev team.",
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );

        return;
      }

      toast.success("Successfully joined event!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleLeaveEvent = async (data) => {
    let currParticipants = data.participants;
    let currUserEvents = allUsers[user.uid].events;
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
      title: "A Participant Left the Event",
      id: newMessageKey,
      content: `${allUsers[user.uid].displayName} has left the event "${
        data.name
      }".`,
    };

    // Create an updated list of unread messages for the current user (joiner)
    let userUpdatedUnreadMessages = {
      unreadMessages: [...allUsers[user.uid].unreadMessages, newMessageKey],
    };

    // Create an updated list of unread messages for the owner of the event
    let ownerUpdatedUnreadMessages = {
      unreadMessages: [...allUsers[data.owner].unreadMessages, newMessageKey],
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

  const handleCloseSeeMoreModal = () => {
    setShowSeeMoreModal(false);
  };
  const handleShowSeeMoreModal = (data) => {
    setModalDataSeeMore(data);
    setShowSeeMoreModal(true);
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
    let newParticipantsEvent = eventToDelete.participants.map(
      (participantId) => {
        let userCurrentEvents = allUsers[participantId].events;
        let userNewEvents = userCurrentEvents.filter(
          (eventId) => eventId !== eventToDelete.id
        );
        return { events: userNewEvents };
      }
    );

    console.log("New participants events: ", newParticipantsEvent);
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
      content: `The event '${eventToDelete.name}' that you're a part of has been deleted.`,
      title: "Event Deleted",
      id: newMessageKey,
    };

    let updatedParticipantsMessages = eventToDelete.participants.map(
      (participant) => {
        let newMessages = [
          ...allUsers[participant].unreadMessages,
          newMessageKey,
        ];
        return { unreadMessages: newMessages };
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

  const handleKeyPress = (e) => {
    if (event.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="event-list">
      <ToastContainer autoClose={2000} />
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
            <Button
              className="add-event-button"
              aria-label="Add event"
              onClick={handleShowAddEventModal}
            >
              <div className="add-event-button-inner-wrapper">
                <FontAwesomeIcon
                  className="plus-icon"
                  icon={faPlus}
                  size="lg"
                ></FontAwesomeIcon>
                <span className="add-event-text">Add Event</span>
              </div>
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
        allEvents={eventData}
        checkConflict={checkConflict}
        createConfirmationModal={confirmationModal}
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
        user={user}
        allEvents={eventData}
        checkConflict={checkConflict}
        createConfirmationModal={confirmationModal}
      />
      <ParticipantsModal
        show={showParticipantsModal}
        handleClose={handleCloseParticipantsModal}
        data={eventToShowParticipants}
        allUsers={allUsers}
      />

      <Container />
      {!events || events.length === 0 ? (
        <p className="empty-page-message">No events to display...</p>
      ) : (
        events.map((e) => (
          <EventCard
            openModal={handleShowSeeMoreModal}
            openDeleteEventModal={handleShowDeleteEventModal}
            handleSetEventToDelete={handleSetEventToDelete}
            handleSetEventToEdit={handleSetEventToEdit}
            handleSetEventToShowParticipants={handleSetEventToShowParticipants}
            openEditEventModal={handleShowEditEventModal}
            handleLeave={handleLeaveEvent}
            handleJoin={handleJoinEvent}
            handleShowParticipantsModal={handleShowParticipantsModal}
            calculateDateObjects={calculateDateObjects}
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
