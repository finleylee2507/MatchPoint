// Event Card
import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './UserEventCard.css';

const UserEventCard = ({ event }) => {

    return (
        <Card>

            <Card.Body>
                <Card.Title>
                    { event.name }
                </Card.Title>

                <Card.Text>
                    date: something 
                </Card.Text>

                <Card.Text>
                    owner: { event.owner }
                </Card.Text>

                <Card.Text>
                    location: { event.location }
                </Card.Text>

                <Card.Text>
                    max capacity: { event.maxCap }
                </Card.Text>
                
            </Card.Body>

        </Card>
    );
};


export default UserEventCard;