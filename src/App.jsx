import {useState} from 'react'
import './App.css'
import EventCard from './components/events/Event'
import eventData from './utilities/data/eventData.json'

const App = () => {
    const [count, setCount] = useState(0)

    return (
        //TODO: these should technically be in event list
        <div className="App" style={_styles.eventList}>

            {eventData.events.map(e => (<EventCard key={e.id} cardData={e}/>))}

        </div>
    )


}

const _styles = {
    eventList: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
}

export default App
