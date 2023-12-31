import React, {useEffect, useState} from "react";
import "./Message.css";
import {updateReadAndUnreadMessages} from "../../utilities/firebase";
import {faTrashCan} from "@fortawesome/free-regular-svg-icons";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {parseDateTimeString} from "../../utilities/dateTime";

const Message = ({
                     message,
                     allUsers,
                     user,
                     showModal,
                     setCurrentMessageToDisplay,
                     isRead,
                     displayDeletedMesasge,
                 }) => {
    if (message === undefined || allUsers === undefined || user === undefined) {
        return "";
    }

    const [dateTimeObject, setDateTimeObject] = useState(null);

    useEffect(() => {
        if (message !== undefined && message.timeStamp !== "undated") {
            //don't parse date for welcome message
            let {month, day, year, hours, minutes, seconds, weekday} =
                parseDateTimeString(message.timeStamp);
            setDateTimeObject({
                month: month,
                day: day,
                year: year,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                weekday: weekday,
            });
        }
    }, [message]);
    const handleMessageClick = () => {
        markAsRead();
        setCurrentMessageToDisplay(message);
        showModal();
    };
    const markAsRead = () => {
        if (message.id === "welcome") {
            return;
        }
        let updatedMessageData = {};

        if (!allUsers[user.uid].readMessages) {
            //user has no read messages
            // Update the list of unread messages
            let userUnreadMessages = allUsers[user.uid].unreadMessages;

            userUnreadMessages = userUnreadMessages.filter(
                (messageId) => messageId !== message.id
            );
            updatedMessageData.unreadMessages = userUnreadMessages;
            updatedMessageData.readMessages = [message.id];

            // Call firebase function to update read and unread messages
            updateReadAndUnreadMessages(updatedMessageData, user.uid);
        } else {
            //user has read messages

            if (!allUsers[user.uid].readMessages.includes(message.id)) {
                //make sure the message is not already in the read message list

                // Update the list of unread messages
                let userUnreadMessages = allUsers[user.uid].unreadMessages;

                userUnreadMessages = userUnreadMessages.filter(
                    (messageId) => messageId !== message.id
                );
                updatedMessageData.unreadMessages = userUnreadMessages;
                updatedMessageData.readMessages = [
                    ...allUsers[user.uid].readMessages,
                    message.id,
                ];

                // Call firebase function to update read and unread messages
                updateReadAndUnreadMessages(updatedMessageData, user.uid);
            }
        }
    };

    const deleteMessage = (e) => {
        e.stopPropagation();

        let updatedMessageData = {};

        if (!allUsers[user.uid].readMessages) {
            //user has no read messages
            // Update the list of unread messages
            let userUnreadMessages = allUsers[user.uid].unreadMessages;

            userUnreadMessages = userUnreadMessages.filter(
                (messageId) => messageId !== message.id
            );
            updatedMessageData.unreadMessages = userUnreadMessages;
            updatedMessageData.readMessages = [];

            // Call firebase function to update read and unread messages
            updateReadAndUnreadMessages(updatedMessageData, user.uid);
        } else {
            //user has read messages

            // Update the list of unread messages
            let userUnreadMessages = allUsers[user.uid].unreadMessages;
            let userReadMessages = allUsers[user.uid].readMessages;
            userUnreadMessages = userUnreadMessages.filter(
                (messageId) => messageId !== message.id
            );

            userReadMessages = userReadMessages.filter(
                (messageId) => messageId !== message.id
            );

            updatedMessageData.unreadMessages = userUnreadMessages;
            updatedMessageData.readMessages = userReadMessages;
            // Call firebase function to update read and unread messages
            updateReadAndUnreadMessages(updatedMessageData, user.uid);
            displayDeletedMesasge();
        }
    };

    return (
        <div
            className={
                "message" +
                (isRead ? " read" : "") +
                (message.id === "welcome" ? " default" : " custom")
            }
            onClick={handleMessageClick}
        >
            <div className="message-upper-container">
                <FontAwesomeIcon
                    icon={faCircle}
                    className={"unread-dot" + (isRead ? " read" : "")}
                />

                <h2 className={"message-card-title" + (isRead ? " read" : "")}>
                    {message.title}
                </h2>

                <div className="date-and-delete-container">
                    {dateTimeObject && (
                        <span className={"date-string" + (isRead ? " read" : "")}>
              {dateTimeObject.year != new Date().getFullYear()
                  ? `${dateTimeObject.month}/${dateTimeObject.day}/${dateTimeObject.year}`
                  : `${dateTimeObject.weekday} ${dateTimeObject.month}/${dateTimeObject.day}`}
            </span>
                    )}

                    {message.id !== "welcome" && (
                        <FontAwesomeIcon
                            icon={faTrashCan}
                            className="delete-message-icon"
                            size="lg"
                            onClick={deleteMessage}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Message;
