// import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import { Provider } from "react-redux";
// import HomeNaveBar from './Frontend/components/pages/Home page/HomeNaveBar.js';
import Login from './Frontend/components/pages/Login page/Login.js';
import About from './Frontend/components/pages/Home page/aboutPage';
import contactUs from './Frontend/components/pages/Home page/Contact/contactUs';

function App() {
  return (
      <Router>
        <div className="App">
          {/* <SearchBar/> */}
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} /> 
            <Route exact path="/contact" component={contactUs} /> 

            

        
          </Switch>        
        </div>
      </Router>
  
  );
}

export default App;