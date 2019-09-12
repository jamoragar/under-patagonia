import React from 'react';
import {Modal, Container, Row, Col } from 'react-bootstrap';

const Image = (props) => {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    {props.model.name + ' ' + props.model.lastName}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col>
                            <img src={props.model.thumbnail} alt=""/>
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