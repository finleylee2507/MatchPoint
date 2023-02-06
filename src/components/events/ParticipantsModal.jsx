import React from "react";
import { Modal, Table } from "react-bootstrap";
import "./EventModal.css";
import logo from "../../assets/small-logo.png";

function ParticipantsModal({ show, handleClose, data, allUsers }) {
  if (!data || !allUsers) {
    return "";
  }
  const { maxCap, participants, owner } = data;

  return (
    <Modal
      show={show}
      onHide={handleClose}
      info={data}
      centered
      backdrop="static"
      scrollable="true"
      fullscreen="sm-down"
    >
      <Modal.Header closeButton>
        <Modal.Title>Event Participants</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* {owner && <p>Owner: {allUsers[owner].displayName}</p>} */}
        <span>Participants: </span>{" "}
        {participants && participants.length == maxCap && (
          <span>Event is full!</span>
        )}
        <Table className="modal-participant-list">
          <tbody>
            {participants &&
              participants.map((id) => (
                <tr className="participant-list-items" key={id}>
                  <td>
                    <img
                      className="profile-image-modal"
                      src={allUsers[id].photoURL}
                    />
                  </td>
                  <td className="participant-list-names">
                    <span className="modal-participant-name">
                      {allUsers[id].displayName} {id == owner ? "(Owner)" : ""}
                    </span>
                  </td>
                </tr>
              ))}
            {participants &&
              participants.length < maxCap &&
              [...Array(maxCap - participants.length)].map((_, i) => (
                <tr className="participant-list-items" key={i}>
                  <td>
                    <img className="profile-image-modal" src={logo} />
                  </td>
                  <td className="participant-list-names">
                    <span className="empty-participant-name">Empty spot</span>
                  </td>
                </tr>
              ))}
            {participants && participants.length == 0 && (
              <tr>
                <td>No participants yet!</td>
              </tr>
            )}
          </tbody>
        </Table>
        {/* <p>
          Spots Available:{" "}
          {participants ? maxCap - participants.length : maxCap}
        </p> */}
      </Modal.Body>
      {/*<Modal.Footer>*/}
      {/*  */}

      {/*</Modal.Footer>*/}
    </Modal>
  );
}

export default ParticipantsModal;
