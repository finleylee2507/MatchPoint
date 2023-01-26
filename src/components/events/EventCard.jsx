// Event Card
import React from 'react';
import {Button, Card, Col, Container, Row} from 'react-bootstrap';
import './EventCard.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot, faPeopleGroup, faUserPlus, faAward} from "@fortawesome/free-solid-svg-icons";

const EventCard = ({
                       openModal,
                       cardData,
                       openDeleteEventModal,
                       handleSetEventToDelete,
                       handleSetEventToEdit,
                       openEditEventModal,
                       user,
                       allUsers
                   }) => {
    const {name, location, maxCap, imgSrc, participants, owner} = cardData;
    const handleDelete = () => {

        //pass to-be-deleted event to the parent component
        handleSetEventToDelete(cardData);

        //show modal
        openDeleteEventModal();


    };

    const handleEdit = () => {
        //pass to-be-updated event to the parent component
        handleSetEventToEdit(cardData);

        //open modal
        openEditEventModal();

    };

    return (
        <Card className="card">
            <Container>
                <Col>
                    <Row className="card-top">
                        <Col xs={4} className="circular-image-wrapper">
                            <img className="image" src={imgSrc} alt="image of event"/>
                        </Col>
                        <Col>
                        <h2 className="text-muted">Date . Time</h2>
                        <Card.Title className="card-title">{name}</Card.Title>
                        <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                        <a href="#" class="subheader"> Location: Name of location</a>
                        </Col>
                    </Row>
                    <hr class="solid"></hr>
                    <Row className="card-middle">
                        <Col>
                            <h className="details-header">Event Size</h>
                            <div className='details'>
                                <div className='left'>
                                    <FontAwesomeIcon icon={faPeopleGroup}></FontAwesomeIcon>
                                </div>
                                <div className='right'>
                                    <h3 className='details-text'>{maxCap}</h3>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <h className="details-header">Spots Available</h>
                            <div className='details'>
                                <div className='left'>
                                    <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
                                </div>
                                <div className='right'>
                                    <h3 className='details-text'>{maxCap - participants.length}</h3>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <h className="details-header">Experience Level</h>
                            <div className='details'>
                                <div className='left'>
                                    <FontAwesomeIcon icon={faAward}></FontAwesomeIcon>
                                </div>
                                <div className='right'>
                                    <h3 className='details-text'>Beginner</h3>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='card-footer'>
                            <Col xs={2} className="circular-image-wrapper footer-padding">
                                <img className="profile-image" src={imgSrc} alt="image of event"/>
                            </Col>
                            <Col className='footer-padding'>
                                <h2 className="subheader">Organized by</h2>  
                                <h3 className='details-text'>{allUsers[owner].displayName}</h3>              
                            </Col>
                            <div>
                                <Button className="card-button" onClick={() => {
                                        openModal(cardData);
                                    }} variant="primary" size="lg">
                                        Join
                                </Button>
                            </div>
                            <Col xl={2} lg={3} md={4}>
                                {
                                    (owner === user.uid) &&
                                    <Button onClick={handleEdit} variant="warning" size="lg"
                                            className="edit-event-button">Edit Event</Button>
                                }
                            </Col>
                            <Col>
                                {
                                    (owner === user.uid) &&
                                    <Button onClick={handleDelete} variant="danger" size="lg"
                                            className="delete-event-button">Delete Event</Button>
                                }
                            </Col>
                    </Row>
                </Col>
            </Container>
        </Card>
    );
};


export default EventCard;