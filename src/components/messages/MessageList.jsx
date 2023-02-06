import React, { useState } from "react";
import Message from "./Message.jsx";
import MessageModal from "./MessageModal";
import { toast, ToastContainer } from "react-toastify";

// import { getUserMessages } from "../../utilities/firebase";
// import messageData from "../../utilities/data/message.json";

const MessageList = ({ allUsers, user, allMessages }) => {
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
      <div className="event-list">
        <p className="empty-page-message">You have no messages ...</p>
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

  return (
    <div className="event-list">
      <ToastContainer autoClose={500} />
      {Object.entries(allUserMessages).map(([id, messageId]) => (
        <Message
          key={id}
          message={allMessages[messageId]}
          allUsers={allUsers}
          user={user}
          setCurrentMessageToDisplay={handleSetCurrentMessageToDisplay}
          showModal={handleShowMessageModal}
          isRead={!allUsers[user.uid]["unreadMessages"].includes(messageId)}
          displayDeletedMesasge={displayDeletedMessage}
        />
      ))}

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
