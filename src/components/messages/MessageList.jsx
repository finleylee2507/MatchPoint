import React, {useState} from "react";
import Message from "./Message.jsx";
import MessageModal from "./MessageModal";
import "./MessageList.css";
import {toast, ToastContainer} from "react-toastify";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import no_events from "../../assets/no_event.png";

// import { getUserMessages } from "../../utilities/firebase";
// import messageData from "../../utilities/data/message.json";

const MessageList = ({allUsers, user, allMessages}) => {
    const [showMessageModal, setShowMessageModal] = useState(false);
    const [currentMessageToDisplay, setCurrentMessageToDisplay] = useState(null);
    const handleShowMessageModal = () => {
        setShowMessageModal(true);
    };
    const handleCloseMessageModal = () => {
        setShowMessageModal(false);
    };

    const displayDeletedMessage = () => {
        toast.success("Successfully deleted message!", {
            position: toast.POSITION.TOP_RIGHT,
        });
    };
    const handleSetCurrentMessageToDisplay = (data) => {
        setCurrentMessageToDisplay(data);
    };
    console.log(user);
    console.log(allUsers);
    console.log("All messages: ", allMessages);

    //render logic
    if (
        user == undefined ||
        allUsers == undefined ||
        allMessages == undefined ||
        allUsers[user.uid] == undefined ||
        (allUsers[user.uid]["unreadMessages"] == undefined &&
            allUsers[user.uid]["readMessages"] == undefined)
    ) {
        return (
            <div className="message-list">
                <div className="loading-container">
                    <img className="no-message-img" src={no_events} alt="Loading"/>
                    <p className="empty-page-message-message-list">
                        Loading messages ...
                    </p>
                </div>
            </div>
        );
    }

    let allUserMessages = [];
    if (allUsers[user.uid]["unreadMessages"]) {
        allUserMessages = [
            ...allUserMessages,
            ...allUsers[user.uid]["unreadMessages"],
        ];
    }

    if (allUsers[user.uid]["readMessages"]) {
        allUserMessages = [
            ...allUserMessages,
            ...allUsers[user.uid]["readMessages"],
        ];
    }

    let unreadMessages = Object.entries(allUserMessages).filter(
        ([id, messageId]) =>
            allUsers[user.uid]["unreadMessages"].includes(messageId)
    );

    let readMessages = Object.entries(allUserMessages).filter(
        ([id, messageId]) =>
            !allUsers[user.uid]["unreadMessages"].includes(messageId)
    );

    return (
        <div className="inbox-wrapper">
            <ToastContainer autoClose={500}/>
            <Tabs defaultActiveKey="unread" className="mb-3 message-list-tabs">
                <Tab className="message-list-tab" eventKey="unread" title="Unread">
                    <div className="message-list">
                        {unreadMessages.length > 0 ? (
                            unreadMessages.map(([id, messageId]) => (
                                <Message
                                    key={id}
                                    message={allMessages[messageId]}
                                    allUsers={allUsers}
                                    user={user}
                                    setCurrentMessageToDisplay={handleSetCurrentMessageToDisplay}
                                    showModal={handleShowMessageModal}
                                    isRead={
                                        !allUsers[user.uid]["unreadMessages"].includes(messageId)
                                    }
                                    displayDeletedMesasge={displayDeletedMessage}
                                />
                            ))
                        ) : (
                            <div className="empty-message-container">
                                <img className="no-message-img" src={no_events} alt="Loading"/>
                                <p>You don't have any unread messages...</p>
                            </div>
                        )}
                    </div>
                </Tab>
                <Tab className="message-list-tab" eventKey="read" title="Read">
                    <div className="message-list">
                        {readMessages.length > 0 ? (
                            readMessages.map(([id, messageId]) => (
                                <Message
                                    key={id}
                                    message={allMessages[messageId]}
                                    allUsers={allUsers}
                                    user={user}
                                    setCurrentMessageToDisplay={handleSetCurrentMessageToDisplay}
                                    showModal={handleShowMessageModal}
                                    isRead={
                                        !allUsers[user.uid]["unreadMessages"].includes(messageId)
                                    }
                                    displayDeletedMesasge={displayDeletedMessage}
                                />
                            ))
                        ) : (
                            <div className="empty-message-container">
                                <img className="no-message-img" src={no_events} alt="Loading"/>
                                <p>You don't have any read messages...</p>
                            </div>
                        )}
                    </div>
                </Tab>
            </Tabs>

            {currentMessageToDisplay && (
                <MessageModal
                    handleClose={handleCloseMessageModal}
                    messageData={currentMessageToDisplay}
                    show={showMessageModal}
                />
            )}
        </div>
    );
};

export default MessageList;
