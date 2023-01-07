import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import EventCard from './components/events/Event';
import eventData from './utilities/data/eventData.json';
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      
      {eventData.events.map(e => (<EventCard key={e.id} cardData={e}/>))}
      
    </div>
  );
};

export default App;
