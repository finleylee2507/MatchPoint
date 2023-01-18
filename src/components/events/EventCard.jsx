// Event Card
import React from 'react'
import {Button, Card, Col, Container, Row} from 'react-bootstrap'
import MPButton from '../general/MPButton'
import './EventCard.css'

const EventCard = ({openModal, cardData}) => {
    const {name, location, max_cap, cur_cap, datetime, img_src} = cardData

    return (
        <Card className="card">
            <Container>
                <Row>
                    <Col xs={4} className="circular-image-wrapper">
                        <img className="image" src={img_src} alt="image of event"/>
                    </Col>
                    <Col xs={8}>
                        <Card.Body className="card-body">
                            <Card.Title className="card-title">{name}</Card.Title>
                            <Row>
                                <Col>
                                    <Card.Text className="card-text">
                                        Location: {location}
                                        <br/>
                                        Date: {datetime.date}
                                    </Card.Text>
                                </Col>
                                <Col>
                                    <Card.Text className="card-text">
                                        {max_cap - cur_cap} / {max_cap} spots available
                                    </Card.Text>
                                </Col>
                            </Row>
                            <MPButton onClick={openModal} variant="primary" size="lg">
                                See More
                            </MPButton>
                        </Card.Body>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}


export default EventCard

