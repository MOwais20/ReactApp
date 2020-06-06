import React from 'react';
import './App.css';
import Hello from './hello';


function App({name, age}) {
  return <div className='myname'>
    Hello from app.js created by {name} Age: {age + 5}
    <br/>
    <Hello firstName = {name} ></Hello>
         </div>
    
}

export default App;
