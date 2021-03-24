import logo from './logo.svg';
import './App.css';
import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import Home from './src/Frontend/src/components/pages/home.js';

function App() {
  return (

      <div className="App">
      {/* <Route exact path="/" component={Home} /> */}

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload"Hello again"".
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  
  );
}

export default App;

