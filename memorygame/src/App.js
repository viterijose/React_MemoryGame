import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Board} from './components/Board'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Clicky Game</h1>
        </header>
        <p className="App-intro">
          Click on an image and see how far you get!
        </p>
        <Board/>
      </div>

    );
  }
}

export default App;
