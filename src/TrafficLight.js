import React from 'react';

function TrafficLight({ activeLight }) {
  return (
    <div className="traffic-light">
      <div className={`light red ${activeLight === 'red' ? 'on' : ''}`}></div>
      <div className={`light yellow ${activeLight === 'yellow' ? 'on' : ''}`}></div>
      <div className={`light green ${activeLight === 'green' ? 'on' : ''}`}></div>
    </div>
  );
}

export default TrafficLight;