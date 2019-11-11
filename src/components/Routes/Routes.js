import React from 'react';
import { Router, Route, Switch, Redirect} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Gallery from '../Gallery/gallery';


import Dashboard from '../Dashboard/Dashboard';
import Upload from '../Upload/Upload';
import NavigationBar from '../Navbar/Navbar';
import Model from '../Model/model';
import _404 from '../404/404';

export const history = createBrowserHistory();

const NotFoundRedirect = () => <Redirect to='/not-found' />



const Routes = (props) => {
    return(
        <Router history={history}>
            <NavigationBar authenticated={props.authenticated} user={props.user}/>
            {/* {history.location.pathname === '/Dashboard' ? <Navsidebar /> : ''} */}
            <Switch>
                <Route exact path="/" exact={true} component={Gallery} />
                <Route path="/Dashboard" component={Dashboard} />
                <Route path='/Upload' component={Upload} />
                <Route path="/not-found" component={_404} />
                <Route path="/model/:id" component={Model} />
                <Route component={NotFoundRedirect} />
            </Switch>
        </Router>
    );
}

export default Routes;