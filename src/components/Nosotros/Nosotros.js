import React from 'react';
import './Nosotros.css';
import './Nosotros.png';
import Footer from '../Footer/Footer'

const Nosotros = () =>{
    
    return(

        <div>
            <div>
                <img className="Nosotros" src={require('./Nosotros.png')} alt="Nosotros como Under-Patagonia"/>
            </div>
            <div className="Footer">
                <Footer />
            </div>
        </div>
        )
}

export default Nosotros;