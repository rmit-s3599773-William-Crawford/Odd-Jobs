import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Form, Container, Row } from "react-bootstrap";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import HomeNaveBar from '../Home page/HomeNaveBar';
import './Login.css';


class Login extends Component{
  constructor(props) {

    super(props);
    this.state = {
      id:"",
      username: "",
      password: "",
      account: ""
    };

    this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }
  
  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }
 
  
  render() {
      return (
        <Container>
        <HomeNaveBar/>
          <div>
            <Form className="login-form">
              <h1>Register</h1>

              <Form.Group controlId="formBasicEmail" className="txtb">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                 
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="txtb">
                <Form.Control
                  type="password"
                  placeholder="Password"
                 
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
                  <Form.Check
                    className="acc-type"
                    type="radio"
                    label="Admin"
                    name="accountType"
                    value="Admin"
                    
                  />
                </Row>
              </Form.Group>

              <Row>
                <Button
                  variant="primary"
                  onClick={(event) => this.handleClick(event)}
                  className="logbtn"
                >
                  Register
                </Button>
              </Row>
            </Form>
          </div>
        </Container>
      );
  }

}

export default Login;