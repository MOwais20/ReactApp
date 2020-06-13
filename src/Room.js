import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './Room.css';

function Room() {
  let [isLit, setLit] = useState(true);
  let [temp , setTemp] = useState(24);
 
  return (
    
    <div className={`room ${isLit ? "Lit" : "Dark"}`}>
    <h1>The room is {isLit ? "Lit" : "Dark"}</h1> 
    <Button className="nbutton" variant="contained" color="primary" onClick={() => setLit(!isLit)}>
        Change Color
    </Button>
    <div className="onoff_button">
      <p>Toggle Light</p>
    <button className="buttons" onClick={() => { setLit(isLit = true) }} >
        ON
    </button>
    <button className="buttons" onClick={() => { setLit(isLit = false) }}>
        OFF
    </button>
    <h2>Room Temperature: {temp} °C</h2>
  <button className="buttons" onClick = { () => (setTemp(++temp)) }>Increase Temp (+)</button>
  <button className="buttons" onClick = { () => (setTemp(--temp)) }>Decrease Temp (-)</button>
    </div>
    </div>
  );
}

export default Room;