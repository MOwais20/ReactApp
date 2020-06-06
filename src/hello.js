import React from 'react';
import './hello.css';

function Hello({firstName}) {
  return <p className="myname">Hey, this is a paragraph in Hello Tag. Name: {firstName}</p>;  
}
    
export default Hello;
