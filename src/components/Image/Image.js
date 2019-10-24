import React from 'react';
import {Modal, Container, Row, Col } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './image.css';

const Image = (props) => {
    
    let imagesModel = [];

    if(props.model === ""){
        // Add code here
    }
    else{
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
                            <ol>
                                <li><span>Nacionalidad: {props.model.nacionality}</span></li>
                                <li>Edad: {props.model.age}</li>
                                <li></li>
                                <li></li>
                            </ol>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    )
}

export default Image;