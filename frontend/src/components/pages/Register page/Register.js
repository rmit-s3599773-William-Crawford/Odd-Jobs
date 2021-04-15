import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Form, Container, Row } from "react-bootstrap";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import HomeNaveBar from './../../Layout/Home layout/HomeNaveBar';
import SearchBar from './../../Layout/Search bar/SearchBar';
import './Register.css';
import axios from "axios";


class Register extends Component{
  constructor(props) {

    super(props);
    this.state = {
      firstName:"",
      lastName: "",
      email: "",
      username: "",
      password: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  //Adds a user to the backend repository using data grabbed the component state
  onSubmit(e) {
    e.preventDefault();
    let newUser = this.state;
    axios.post('/user/save', newUser)
  }
  
  render() {
      return (
        <Container>
        <HomeNaveBar/>
        <SearchBar/>

          <div>
            <Form className="register-form" onSubmit={this.onSubmit}>
              <h1>Register</h1>

              <Form.Group controlId="formBasicEmail" className="txtbr">
                <Form.Control
                  type="text"
                  name = "email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="txtbr">
                <Form.Control
                  type="text"
                  name = "password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicFirstName" className="txtbr">
                <Form.Control
                  type="text"
                  name = "firstName"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.onChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicLastName" className="txtbr">
                <Form.Control
                  type="text"
                  name = "lastName"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.onChange}
                />
              </Form.Group>

              <Row>
                <Button
                    type="submit"
                    value="Submit"
                  variant="primary"
                  // onClick={(event) => this.handleClick(event)}
                  className="registerbtn"
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
