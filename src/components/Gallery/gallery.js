import React, { useState, useEffect } from 'react';
import { Spinner, Button } from 'react-bootstrap'

import firebase from '../Firebase/firebase';
import axios from 'axios';


import './gallery.css'
import Jumbo from '../Jumbotron/Jumbotron';
import Image from '../Image/Image';
import Promotion from '../Promotion/Promotion';
import Footer from '../Footer/Footer';

export const Models = () => {
    const [models, setModels] = useState(null);

    useEffect(() =>{
        // Single time fetching data
        //
        //
        // firebase.database().ref()
        // .once('value')
        // .then((snapshot) => {
        //     console.log('With ONCE', snapshot.val())
        //     snapshot ? setData(snapshot.val()) : setData(null)
        // })
        // .catch((e) => {
        //     console.log(e);
        // });
        //
        //
        // subscribed to any change in your data from data base!
        firebase.database().ref('Models').orderByChild('creationDate').on('value', (snapshot) => {
            console.log('With ON:',snapshot.val())
            setModels(snapshot.val())
        });

    }, []);
    return models;
}

const Gallery = () => {
    const [fireBaseDate, setFireBaseDate] = useState(null);
    axios.post('https://us-central1-models-gallery-puq.cloudfunctions.net/date',{format:'DD/MM/YYYY'})
        .then((response) => {
            setFireBaseDate(response.data)
        });

    let content = Models();
    let models = [];
    
    const [imageModalShow, setImageModalShow] = useState(false);
    const [selectedModel, setSelectedModel] = useState('');
    
    
    if(content){
        Object.keys(content).map((key, index) => 
            models[index] = content[key]
        );

        return(
            <div className="appContentBody">
                <Jumbo />
                <Promotion models={models}/>
                <div className="Gallery">
                <h1>FlexBox Image Gallery</h1>

                <div className="img-area">
                    {models.map((model, key) =>{
                        let myDate = new Date(model.creationDate);
                        let modelEndDate = new Date(myDate.setDate(myDate.getDate() + 30)).toLocaleDateString('en-GB')
                        if(fireBaseDate !== modelEndDate){
                            return (
                                <div className="img-card" key={key}>
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
                                    {/* <ul className="somethingToSay">
                                        <li>Nacionalidad: {model.nacionality}</li>
                                        <li>Valor: $50.000</li>
                                    </ul> */}
                                    
                                    <Button variant="danger" onClick={() => {
                                                setImageModalShow(true)
                                                setSelectedModel(model)}
                                                }>
                                        Ver
                                    </Button>
                                </div>  
                            );
                        }
                    })}                
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