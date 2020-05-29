import React from 'react';
import logo from './logo.svg';
import './App.css';

import {ViewBox} from'./viewWindow/viewBox'

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className='contain'>
            <ViewBox/>
        </div>
        <footer className='footer'>gxbndfhn</footer>

    </div>
  );
}

export default App;
