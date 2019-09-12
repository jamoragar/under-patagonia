import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';


import './Navsidebar.css'


const Navsidebar = () => {
    return (
        <Navbar collapseOnSelect fixed="left"  bg="light">
            <Nav className="col-sm-2 bg-light sidebar" defaultActiveKey="/">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <NavLink to="/Dashboard" className="nav-link">
                            Dashboard
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Upload" className="nav-link">
                            Modelos
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </Nav>            
        </Navbar>
    );
}

export default Navsidebar;