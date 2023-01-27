import React from 'react';
import {Button, Card, Col, Container, Row} from 'react-bootstrap';
import './Message.css';

export const Message = ({messageData}) => {

    return(
        <Card className="card">
            <Container>
                <Row>
                    <Col xs={8}>
                        <Card.Body className="card-body">
                            <Card.Title className="card-title">{messageData[1].title}</Card.Title>
                            <Row>
                                <Col>
                                    <Card.Text className="card-text">
                                        {messageData[1].content}
                                        {/*<br/>*/}
                                        {/*Date: {datetime.date}*/}
                                    </Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}