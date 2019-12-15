import React, { Component } from 'react';
import './Legal.css';
import './Legal.png';
import Footer from '../Footer/Footer';



const Legal = () =>{
  
        return(
            <div>
            <div>
                    <img className="Legal" src={require('./Legal.png')} alt="Información Legal de under-patagonia" />
             ></div>
              <div className="Footer"><Footer /></div>
           </div>
        );
    }

export default Legal;

