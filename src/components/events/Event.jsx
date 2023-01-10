// Event Card
import React from 'react'
import { Button, Card, Row, Col, Container } from 'react-bootstrap'
import Basketball from '../../assets/Basketball.png'

const EventCard = ({ cardData }) => {
    const { name, location, max_cap, cur_cap, datetime } = cardData

    return (
        <Card style={_styles.card}>
            <Container>
                <Row>
                    <Col xs={4} style={_styles.circularImageWrapper}>
                        <img style={_styles.image} src={Basketball} />
                    </Col>
                    <Col xs={8}>
                        <Card.Body style={_styles.cardBody}>
                            <Card.Title style={_styles.cardTitle}>{name}</Card.Title>
                            <Card.Text style={_styles.cardText}>
                                Location: {location}
                                <br />
                                Total spots: {max_cap}
                                <br />
                                Spots avaliable: {max_cap - cur_cap}
                                <br />
                                Date: {datetime.date}
                            </Card.Text>
                            <Button variant="primary" size='sm'>Go somewhere</Button>
                        </Card.Body>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

const _styles = {
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
    },
    image: {
        width: '20vw',
        height: '20vw',
        borderRadius: '50%',
        // adaptive image position
        objectFit: 'cover',
    },
}

export default EventCard

