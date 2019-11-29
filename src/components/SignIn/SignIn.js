import React, {useState} from 'react';
import {Modal, Button, Spinner, Form, Overlay, Tooltip } from 'react-bootstrap';
import firebase from '../Firebase/firebase';
import './SignIn.css';

const SignIn = (props) => {

    const [show, setShow] = useState(false);

    const onFormSubmit = (e) => {
        e.preventDefault();
            
        const email = e.target.elements.email.value;
        const psw = e.target.elements.psw.value
    
        firebase.auth()
            .createUserWithEmailAndPassword(email, psw)
            .then((user) => {
                let uid = user.user.uid;
                firebase.database().ref().child('User/').push().set({
                    uid:uid,
                    email:email,
                    password:psw
                })
              })
                .catch((error) => {
                  console.log(error);
                });
      }

    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    ¿Desea ser Usuario de &copy;Under Patagonia?
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={onFormSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" placeholder="Su dirección de correo." name="email" />
                        <Form.Text className="text-muted">
                            Ingrese el correo electrónico con el cual se registro.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Su contraseña." name="psw"/>
                    </Form.Group>
                    <Button variant="danger" name="btnLogin" type="submit" block>
                        Registrarse   
                    </Button>
                    <Overlay  show={show} placement="bottom" onHide={() => setShow(false)} rootClose={true}>
                        {props => {
                            return(
                                <Tooltip className="tooltip-error" {...props} show={props.show.toString()}>
                                    blabla
                                </Tooltip>
                            )
                        }}
                    </Overlay>
                </Form>
            </Modal.Body>
        </Modal>
    )
}
export default SignIn;