import React, { useState } from "react";
import Message from "./Message.jsx";
import MessageModal from "./MessageModal";

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

  const handleSetCurrentMessageToDisplay = (data) => {
    setCurrentMessageToDisplay(data);
  };
  console.log(user);
  console.log(allUsers);
  console.log("All messages: ", allMessages);

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
      {Object.entries(allUserMessages).map(([id, m]) => (
        <Message
          key={id}
          message={allMessages[m]}
          allUsers={allUsers}
          user={user}
          setCurrentMessageToDisplay={handleSetCurrentMessageToDisplay}
          showModal={handleShowMessageModal}
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
