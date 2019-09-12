import React from 'react';

import './Jumbotron.css';

const ctaSaberMas = () => {
  console.log("Display pop up");
}

const Jumbo = () => {
    return (
      <div className="jumbotron jumbotron-fluid bg-dark">
        
        <div className="jumbotron-background">
          <img src={require('./jumbo.jpg')} className="blur " alt="Servicios Escort"/>
        </div>

        <div className="container text-white">
          <img className="Logo" src={require('../Navbar/logo.png')} alt="Under Patagonia"/>
          <p className="lead">Página de publicidad para servicios Escort.</p>
          <hr className="my-4" />
          <p>Públicate este primer mes de forma gratuita!.</p>
          <div className="btn btn-danger btn-lg" onClick={ctaSaberMas} role="button">Quiero saber más!</div>
        </div>

      </div>
    );
}

export default Jumbo;