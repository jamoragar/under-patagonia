import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import firebase from './components/Firebase/firebase';
import Routes, {history} from './components/Routes/Routes';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');

export const renderApp = (hasAuthenticated, user) => {
    ReactDOM.render(
        (<div className="App">
            <Routes authenticated={hasAuthenticated} user={user}/>
        </div>), root);
};


firebase.auth().onAuthStateChanged((userAuth) => {
    if (userAuth) {
        const user = userAuth.email;
        renderApp(true, user);
    }
    else {
        renderApp(false, null);
        history.push('/');
    }
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
