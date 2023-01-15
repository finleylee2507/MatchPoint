// Event Card
import React from 'react';
import {Button, Card, Col, Container, Row} from 'react-bootstrap';
import './EventCard.css';

const EventCard = ({openModal, cardData}) => {
    const {name, location, maxCap, currCap, imgSrc} = cardData;

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
                                        {maxCap - currCap} / {maxCap} spots available
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Button className="card-button" onClick={() => {
                                openModal(cardData);
                            }} variant="primary" size="lg">
                                See More
                            </Button>
                        </Card.Body>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
};


export default EventCard;

