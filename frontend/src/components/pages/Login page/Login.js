import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Form, Container, Row } from "react-bootstrap";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import HomeNaveBar from './../../Layout/Home layout/HomeNaveBar';
import SearchBar from './../../Layout/Search bar/SearchBar';
import './Login.css';
import axios from "axios";


class Login extends Component{
  constructor(props) {

    super(props);
    this.state = {
      username: "",
      password: "",
      roles: "USER"
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onChange(e){
    this.setState({ [e.target.name]: e.target.value});
  }

  //Attempts to log in the user
  onSubmit(e) {
    e.preventDefault();
    let userToLogIn = this.state;
    axios.post("/login", {}, {
      auth: {
        username: userToLogIn.username,
        password: userToLogIn.password,
        roles: userToLogIn.roles
      }
    })
  }
 
  
  render() {
      return (
        <Container>
        <HomeNaveBar/>
        <SearchBar/>
          <div>
            <Form className="login-form" onSubmit={this.onSubmit}>
              <h1>Login</h1>

              <Form.Group controlId="formBasicEmail" className="txtb">
                <Form.Control
                    type="text"
                    name = "username"
                    placeholder="Enter email"
                    value={this.state.username}
                    onChange={this.onChange}
                 
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="txtb">
                <Form.Control
                    type="password"
                    name = "password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.onChange}
                 
                />
              </Form.Group>

              <Form.Group>
                <Row className="acc-type">
                  <Form.Label>Account:</Form.Label>
                  <Form.Check
                    className="acc-type"
                    type="radio"
                    label="Householder"
                    name="accountType"
                    value="Householder"
                  
                  />
                  <Form.Check
                    className="acc-type"
                    type="radio"
                    label="Work trader"
                    name="accountType"
                    value="WorkTrader"
                    
                  />
                </Row>
              </Form.Group>

              <Row>
                <Button
                    type="submit"
                    value="Sign in"
                  variant="primary"
                  // onClick={(event) => this.handleClick(event)}
                  className="logbtn"
                >
                  Login
                </Button>
                <div className="bottom-text">
                  Don't have account?
                  <a href="/register" style={{ textDecoration: "none" }}>
                    {" "}
                    Sign up{" "}
                  </a>
                </div>
              </Row>
            </Form>
          </div>
        </Container>
      );
  }

}

export default Login;