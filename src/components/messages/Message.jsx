import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './Message.css';

export const Message = ({ messageData }) => {

    return (
        <Card className="card" onClick={() => (console.log("you click the btn"))}>
            <Card.Body className="card-body">
                <Card.Title className="card-title">{messageData[1].title}</Card.Title>
                <Card.Text className="card-text">
                    {messageData[1].content}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}