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
                <Nav className="mr-auto">
                    <Nav.Link>Nosotros</Nav.Link>
                    <Nav.Link>Novedades</Nav.Link>
                    <Nav.Link>Contacto</Nav.Link>
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
                                    <Dropdown.Item onClick={() => LogOut()}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        )
                        :
                        (
                            <Nav.Link onClick={() => setModalShow(true)}>Login</Nav.Link>
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