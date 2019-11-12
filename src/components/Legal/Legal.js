import React from 'react';
import './Legal.css';
import './Legal.png';

const Legal = () =>{

    return(
        <img className="legal" src={require('./Legal.png')} alt="Información Legal de under-patagonia" />
    )
}

export default Legal;

