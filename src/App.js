import React, { useState } from 'react';
import './App.css';
import TrafficLight from './TrafficLight';

function App() {
  const [activeLight, setActiveLight] = useState('');

  return (
    <div className="app">
      <h1>Traffic Light System</h1>
      <TrafficLight activeLight={activeLight} />
      <div className="controls">
        <button onClick={() => setActiveLight('red')}>Red</button>
        <button onClick={() => setActiveLight('yellow')}>Yellow</button>
        <button onClick={() => setActiveLight('green')}>Green</button>
      </div>
    </div>
  );
}

export default App;