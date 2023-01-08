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
                        <Card.Body>
                            <Card.Title>Title: {name}</Card.Title>
                            <Card.Text>
                                Location: {location}
                            </Card.Text>
                            <Card.Text>
                                Total spots: {max_cap}
                            </Card.Text>
                            <Card.Text>
                                Spots avaliable: {max_cap - cur_cap}
                            </Card.Text>
                            <Card.Text>
                                Date: {datetime.date}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

const _styles = {
    card: {
        margin: '20px',
        width: '40vw',
    },
    circularImageWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        // adaptive image position
        objectFit: 'cover',
    }
}

export default EventCard

