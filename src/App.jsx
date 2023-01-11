import './App.css'
import EventList from './components/events/EventList'
import NavBar from "./components/Navbar"

const App = () => {
    return (
        <div className="App">
            <NavBar/>
            <EventList/>
        </div>
    )
}

export default App
