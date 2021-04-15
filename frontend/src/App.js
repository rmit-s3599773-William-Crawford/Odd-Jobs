import React, { Component } from "react";
import ReactDOM from "react-dom";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import About from "./components/pages/Home page/aboutPage"
import Login from "./components/pages/Login page/Login";
import contactUs from "./components/pages/Home page/Contact/contactUs";
import Register from "./components/pages/Register page/Register";
import Profile from "./components/pages/Profile page/Profile";


export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[]
        }
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={About} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/contact" component={contactUs} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/profile" component={Profile} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;

ReactDOM.render(
    <App />,
    document.querySelector("#app")
);