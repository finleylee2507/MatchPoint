import React from "react";
import { Modal } from "react-bootstrap";
import "./EventModal.css";

function EventModal({ show, handleJoin, handleClose, data }) {
  if (!data) {
    return "";
  }
  const { name, location, dateTimeString, desc } = data;

  const dateTime = new Date(dateTimeString);

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
        <p>Description: {desc}</p>
        <p>Location: {location}</p>
        <p>
          Time:{" "}
          {dateTime.toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: false,
            timeZone: "CST",
          })}{" "}
          CST
        </p>
      </Modal.Body>
      {/*<Modal.Footer>*/}
      {/*  */}

      {/*</Modal.Footer>*/}
    </Modal>
  );
}

export default EventModal;
