import React from 'react';
import './App.css'; // Make sure the path is correct
import logo from './assets/holberton-logo.jpg'; // Adjust the path as needed
import { getCurrentYear, getFooterCopy } from '../utils/utils';
import Notifications from '../Notifications/Notifications';


function App() {
  return (
    <div className="App">
      <Notifications />
      <header className="App-header">
        <img src={logo} alt="Holberton logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label for="email">Email: </label><input id="email" type="email"/>
        <label for="password">Password: </label><input id="password" type="password"/>
        <button id="buttom_ok">OK</button>
      </div>
      <footer className="App-footer">
      <p>Copyright {getCurrentYear()} {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;