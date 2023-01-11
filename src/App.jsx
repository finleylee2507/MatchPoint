import './App.css'
import EventList from './components/events/EventList'
import NavBar from "./components/Navbar"
const App = () => {
    return (

        //TODO: these should technically be in event list
        <div className="App">
            <NavBar/>
            <EventList/>
        </div>
    )
}

export default App
