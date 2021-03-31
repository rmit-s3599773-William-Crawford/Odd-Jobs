import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Form, Container, Row } from "react-bootstrap";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import HomeNaveBar from './../../Layout/Home layout/HomeNaveBar';
import SearchBar from './../../Layout/Search bar/SearchBar';
import './Register.css';


class Register extends Component{
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
        <SearchBar/>

          <div>
            <Form className="register-form">
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
              <Form.Group controlId="formBasicFirstName" className="txtb">
                <Form.Control
                  type="firstname"
                  placeholder="First Name"
                 
                />
              </Form.Group>
              <Form.Group controlId="formBasicLastName" className="txtb">
                <Form.Control
                  type="lastname"
                  placeholder="Last Name"
                 
                />
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

export default Register;