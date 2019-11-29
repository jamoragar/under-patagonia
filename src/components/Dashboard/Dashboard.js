import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Navsidebar from '../Navsidebar/Navsidebar';
import Upload from '../Upload/Upload';
import CreateAccount from '../CreateAccount/CreateAccount';


import './Dashboard.css';

const history = createBrowserHistory();


const DashboardJSX = () => {
    return (
        <div className="col-md-9 ml-sm-auto col-lg-10 Dashboard">
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className='justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
                            <h2>Bienvenido al panel de administración</h2>
                            <p>Esta sección esta en desarrollo, por lo tanto cualquier idea es bienvenida para poder mejorar este portal. Ya sean funciones, estetica, etc.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Dashboard = () => {
    return (
        <Router history={history}>
            <div className="container-fluid">
                <div className="row">
                    <Navsidebar />
                </div>
            </div>
            <Switch>
                <Route exact path="/Dashboard" component={DashboardJSX} />
                <Route path="/Dashboard/Upload" component={Upload} />
                <Route path='/Dashboard/CreateAccount' component={CreateAccount} />
            </Switch>
        </Router>
    );
}

export default Dashboard;