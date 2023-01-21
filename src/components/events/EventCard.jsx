// Event Card
import React from 'react';
import {Button, Card, Col, Container, Row} from 'react-bootstrap';
import './EventCard.css';

const EventCard = ({openModal, cardData, openDeleteEventModal, handleSetEventToDelete, user}) => {
    const {name, location, maxCap, imgSrc, participants, owner} = cardData;
    const handleDelete = () => {
        //show modal
        openDeleteEventModal();

        //set pass to-be-deleted event to the parent component
        handleSetEventToDelete(cardData);

    };

    return (
        <Card className="card">
            <Container>
                <Row>
                    <Col xs={4} className="circular-image-wrapper">
                        <img className="image" src={imgSrc} alt="image of event"/>
                    </Col>
                    <Col xs={8}>
                        <Card.Body className="card-body">
                            <Card.Title className="card-title">{name}</Card.Title>
                            <Row>
                                <Col>
                                    <Card.Text className="card-text">
                                        Location: {location}
                                        {/*<br/>*/}
                                        {/*Date: {datetime.date}*/}
                                    </Card.Text>
                                </Col>
                                <Col>
                                    <Card.Text className="card-text">
                                        {maxCap - participants.length} / {maxCap} spots available
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} sm={5} md={4} lg={3} xl={2}>
                                    <Button className="card-button" onClick={() => {
                                        openModal(cardData);
                                    }} variant="primary" size="lg">
                                        See More
                                    </Button>
                                </Col>

                                <Col xs={6}>
                                    {
                                        (owner === user.uid) &&
                                        <Button onClick={handleDelete} variant="danger" size="lg"
                                                className="delete-event-button">Delete Event</Button>
                                    }
                                </Col>

                            </Row>


                        </Card.Body>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
};


export default EventCard;

