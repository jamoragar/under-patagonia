import React from 'react';
import './App.css';

import NavigationBar from './components/Navbar/Navbar';
import Gallery from './components/Gallery/gallery';
import Routes from './components/Routes/Routes';



const App = () => {

  return (
    <div className="App">
      <Routes />
      <NavigationBar /> 
      <Gallery/>
    </div>
  );
}

export default App;
