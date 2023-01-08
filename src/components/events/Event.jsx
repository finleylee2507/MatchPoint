// Event Card
import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Basketball from '../../assets/Basketball.png'

const EventCard = ({cardData}) => {
    const {id, name, location, max_cap, cur_cap, datetime} = cardData

    return (
        <Card style={_styles.container}>
            <CircularImageWrapper imageSrc={Basketball}/>
            <div style={{}}>
                <Card.Body style={_styles.cardContainer}>
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
            </div>

        </Card>
    )
}

export const CircularImageWrapper = ({imageSrc}) => {
    return (
        <div style={_styles.circularImageWrapperContainer}>
            <img style={_styles.image} src={imageSrc}/>
        </div>
    )
}

const _styles = {
    cardContainer: {
        borderRadius: '20px',
    },
    container: {
        margin: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '40vw',

    },
    circularImageWrapperContainer: {
        // border: '1px solid black',   
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alighItems: 'center',

    },
    image: {
        width: '150px',
        height: 'auto',
        borderRadius: '50%'
    }

}

export default EventCard

