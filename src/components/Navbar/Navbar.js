import React ,{ useState } from 'react';
import { NavLink } from 'react-router-dom'
import { Nav, Navbar, Dropdown, DropdownItem } from 'react-bootstrap/';

import {LogOut} from '../Firebase/firebase';
import Login from '../Login/Login';
// import {history} from '../Routes/Routes';

import './Navbar.css';

const NavigationBar = (props) => {

    // const redirectionTo = (path) => {
    //     history.push('/'+path)
    // }

    const [modalShow, setModalShow] = useState(false);

    return (
        <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>
                <NavLink className="linkBrand" to="/">
                    <img src={require('./logo.png')} width="120" height="50" className="align-top" alt="Under Patagonia"/>
                </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto navlinks">
                    <NavLink to='/Nosotros'>Nosotros</NavLink>
                    <NavLink to='/Legal'>Legal</NavLink>
                    <NavLink to='#'>Novedades  </NavLink>
                    <NavLink to='#'>Contacto</NavLink>
                </Nav>

                <Nav>
                    {
                        (props.authenticated && props.user) ? (
                            <Dropdown>
                                <Dropdown.Toggle variant="light" id="dropdown-basic">
                                    Bienvenido {props.user === 'javier.moragarojas@gmail.com' ? 'Javier' : 'Marcelo' } 
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <DropdownItem href="/Dashboard">Dashboard</DropdownItem>
                                    <DropdownItem href="/">Home</DropdownItem>
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={() => LogOut()}>Salir</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        )
                        :
                        (
                            <div className="navLogins">
                                <Nav.Link onClick={() => setModalShow(true)}>Registrarse</Nav.Link>
                                <Nav.Link onClick={() => setModalShow(true)}>Entrar</Nav.Link>
                            </div>
                        )
                    }
                </Nav>
            </Navbar.Collapse>
            <Login
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
        </Navbar>
    );
}
export default NavigationBar;