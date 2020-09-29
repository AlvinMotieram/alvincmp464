import React from 'react';
import logo from './AlvinMotieram.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        My name is Alvin Motieram and I'm going to master React!
        </p>
        <a
          className="App-link"
          href="https://github.com/AlvinMotieram"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out Fam!!
        </a>
      </header>
    </div>
  );
}

export default App;
