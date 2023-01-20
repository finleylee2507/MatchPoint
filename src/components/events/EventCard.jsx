// Event Card
import React from 'react';
import {Button, Card, Col, Container, Row} from 'react-bootstrap';
import {deleteEvent} from "../../utilities/firebase";
import MPButton from '../general/MPButton'
import './EventCard.css';

const EventCard = ({openModal, cardData}) => {
    const {name, location, maxCap, imgSrc,participants,id} = cardData;

    const handleDelete=()=>{
        deleteEvent(id)

    }

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
                            <Button className="card-button" onClick={() => {
                                openModal(cardData);
                            }} variant="primary" size="lg">
                                See More
                            </Button>
                            <Button onClick={handleDelete}>Delete Event</Button>
                        </Card.Body>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
};


export default EventCard;

