import React, { useState, useEffect } from 'react';
import { Spinner, Button } from 'react-bootstrap'

import firebase from '../Firebase/firebase';
import axios from 'axios';


import './gallery.css'
import Jumbo from '../Jumbotron/Jumbotron';
import Image from '../Image/Image';
import Promotion from '../Promotion/Promotion';
import Footer from '../Footer/Footer';
import Filter from '../Filter/filter';


const shuffleArray = (array) => {

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const Gallery = () => {

    const [fireBaseDate, setFireBaseDate] = useState(null);    
    const [imageModalShow, setImageModalShow] = useState(false);
    const [selectedModel, setSelectedModel] = useState('');
    const [fbData, setFbData] = useState(null);

    useEffect(() => {
        axios.post('https://us-central1-models-gallery-puq.cloudfunctions.net/date',{format:'DD/MM/YYYY'})
            .then((response) => {
                setFireBaseDate(response.data)
        });

        firebase.database().ref('Models').on('value', (snapshot) => {
            var key = Object.values(snapshot.val());
            key = shuffleArray(key);
            setFbData(key);
        });

    }, []);

    let models = [];
    
    if(fbData){
        fbData.forEach((key, index) => {
            models[index] = key;
            }
        );

        return(
            <div className="appContentBody">
                <Jumbo />
                <Promotion models={models}/>
                <div className="Gallery">
                <h1>Galería - Under Patagonia</h1>

                <Filter />

                <div className="img-area">
                    {models.map((model, key) =>{
                        let myDate = new Date(model.creationDate);
                        let modelEndDate = new Date(myDate.setDate(myDate.getDate() + 30)).toLocaleDateString('en-GB')
                        if(fireBaseDate !== modelEndDate && model.active === true){
                            return (
                                <div className="img-card filterCard" key={key}>
                                    <div className="flip-img">
                                        <div className="flip-img-inner">
                                            <div className="flip-img-front">
                                                <img className="single-img card-img-top" src={model.thumbnail} alt="Model"/>
                                            </div>
                                            <div className="flip-img-back">
                                                <h2>{model.certified ? 'Verificada!' : 'No Verificada'}</h2>
                                                <p>Número: {model.contact_number}</p>
                                                <p>Ciudad: {model.city}</p>
                                                <p>Servicios: {model.services}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <h5>{model.name}</h5>
                                    
                                    <Button variant={model.gender === 'Femenino' ? 'danger' : 'warning'} onClick={() => {
                                                setImageModalShow(true)
                                                setSelectedModel(model)}
                                                }>
                                        Ver
                                    </Button>
                                </div>  
                            );
                        }
                    return 0})}                
                </div>
                    <Image
                        show={imageModalShow}
                        onHide={() => setImageModalShow(false)}
                        model={selectedModel}
                    />
                </div>
            <Footer />
            </div>
    )} else {
        return (
            <div className="loading">
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="secondary" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="warning" />
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="dark" />
            </div>
    )}
}


export default Gallery;