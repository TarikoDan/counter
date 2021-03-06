import React from 'react';
import logo from './logo.svg';
import './App.css';

import {ViewBox} from './Counter/viewBox'

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        <ViewBox/>
        <footer className='footer'>Taras Danylyshyn</footer>
    </div>
  );
}

export default App;
