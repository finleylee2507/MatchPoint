// Event Card
import React from 'react'
import {Button, Card, Col, Container, Row} from 'react-bootstrap'
import './EventCard.css'

const EventCard = ({openModal, cardData}) => {
    const {name, location, max_cap, cur_cap, datetime, img_src} = cardData

    return (
        <Card style={bs_styles.card}>
            <Container>
                <Row>
                    <Col xs={4} style={bs_styles.circularImageWrapper}>
                        <img className="image" src={img_src} alt="image of event"/>
                    </Col>
                    <Col xs={8}>
                        <Card.Body className='card-body' style={bs_styles.cardBody}>
                            <Card.Title style={bs_styles.cardTitle}>{name}</Card.Title>
                            <Row>
                              <Col>
                                <Card.Text style={bs_styles.cardText}>
                                  Location: {location}
                                  <br />
                                  Date: {datetime.date}
                                </Card.Text>
                              </Col>
                              <Col>
                                <Card.Text style={bs_styles.cardText}>
                                  {max_cap - cur_cap} / {max_cap} spots available
                                </Card.Text>
                              </Col>
                            </Row>
                            <Button className="card-button" onClick={openModal} variant="primary" size="lg">
                              See More
                            </Button>
                        </Card.Body>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

const bs_styles = {
    card: {
        marginTop: '2vh',
        width: '85vw',
    },
    circularImageWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardBody: {
        padding: '10px 0px 10px 0px',
    },
    cardTitle: {
        fontSize: '4vw',
    },
    cardText: {
        fontSize: '2vw',
        marginBottom: '8px',
    }
}

export default EventCard

