import React from 'react';
import {Modal, Container, Row, Col, Button } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './image.css';

const Image = (props) => {
    
    let imagesModel = [];
    let numberForWhatsapp;
    let numberWithOutPlus;
    const promotionText = '?text=Hola!%20Vi%20tu%20aviso%20en%20Under-Patagonia%20😘';
    
    
    if(props.model === ""){
        // Add code here
    }
    else{
        numberWithOutPlus = props.model.contact_number.replace("+", "");
        numberForWhatsapp = numberWithOutPlus.replace(/ /g,'');
        imagesModel = 
        props.model.images.map((image) => {
            return {
                original: image,
                thumbnail: image,
            }
        })
    }
      
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    {props.model.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col>
                            <ImageGallery items={imagesModel} />
                            {/* <img src={props.model.thumbnail} alt=""/> */}
                        </Col>
                        <Col>
                            <ol className="modelInfo">
                                <li>País de Origen: {props.model.nacionality}</li>
                                <li>Genero: {props.model.gender}</li>
                                <li>Edad: {props.model.age}</li>
                                <li>Color de Cabello: {props.model.hairColor}</li>
                                <li>Altura: {props.model.height}Mt.</li>
                                <li>Peso: {props.model.weight}Kg.</li>
                                <li>Horario: {props.model.times}</li>
                                <li>Servicios: {props.model.services}</li>
                                <li className="importantModelInfo">Trabajando en: {props.model.city}</li>
                                <li className="importantModelInfo">
                                    <a href={'https://wa.me/' + numberForWhatsapp + promotionText} target="_blank" rel="noopener noreferrer">Teléfono: {props.model.contact_number}</a>
                                </li>
                            </ol>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    )
}

export default Image;