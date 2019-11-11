import React from 'react';

import './tabImageGallery.css';
import { Row } from 'react-bootstrap';



const TabImageGallery = () => {
    return (
        <div>
            <div className="row">
                <div className="column">
                    <img src="https://www.w3schools.com/howto/img_nature.jpg"  alt="Nature"  />
                </div>
                <div className="column">
                    <img src="https://www.w3schools.com/howto/img_mountains.jpg" alt="Snow"  />
                </div>
                <div className="column">
                    <img src="https://www.w3schools.com/howto/img_snow.jpg" alt="Mountains"  />
                </div>
                <div className="column">
                    <img src="https://www.w3schools.com/howto/img_lights.jpg" alt="Lights"  />
                </div>
            </div>
        

            <div className="container">
                <span className="closebtn">&times;</span>

                <img id="expandedImg" style={{width: '100%'}} />

                <div id="imgtext"></div>
            </div>
        </div>
    )
}

export default TabImageGallery;