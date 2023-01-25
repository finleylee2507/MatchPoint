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
                       user
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
                            <h className="details-header">Team Size</h>
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
                        <Col>
                            <Row className='card-bottom'>
                                <Col>
                                    {/* <Col xs={4} className="circular-image-wrapper">
                                        <img className="image" src={imgSrc} alt="image of event"/>
                                    </Col> */}
                                    <Col>
                                        <h2 className="text-muted">Organized by</h2>                
                                    </Col>
                                </Col>

                                <Col xl={2} lg={3} md={4}>
                                    <Button className="card-button float-right" onClick={() => {
                                        openModal(cardData);
                                    }} variant="primary" size="lg">
                                        Join
                                    </Button>
                                 </Col>

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
                    </Row>
                </Col>
            </Container>
        </Card>
    );
};


export default EventCard;