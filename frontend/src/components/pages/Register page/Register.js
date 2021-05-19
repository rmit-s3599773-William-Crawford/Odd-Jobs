import React, { Component } from "react";
import { Button, Form, Container, Row } from "react-bootstrap";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import './Register.css';
import axios from "axios";


class Register extends Component{
  constructor(props) {

    super(props);
    this.state = {
      firstName:"",
      lastName: "",
      email: "",
      password: "",
      address:'',
      phone:''
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
      console.log(newUser);
      axios.post("/api/user/register", newUser)
      alert("Account successfully created")
      window.history.back()
  }

  render() {
      return (
        <Container>
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
                  required
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
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicFirstName" className="txtbr">
                <Form.Control
                  type="text"
                  name = "firstName"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.onChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicLastName" className="txtbr">
                <Form.Control
                  type="text"
                  name = "lastName"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.onChange}
                  required
                />
              </Form.Group>

                
              <Form.Group controlId="formBasicPhone" className="txtbr">
                  <Form.Control
                      type="phone"
                      name = "phone"
                      placeholder="Phone ##-###-#####"
                      value={this.state.phone}
                      onChange={this.onChange}        
                  />
                </Form.Group>
                
                <Form.Group controlId="formBasicAddress" className="txtbr">
                  <Form.Control
                      type ="address"
                      name = "address"
                      placeholder="Full address"
                      value={this.state.address}
                      onChange={this.onChange}
                  />
                </Form.Group>

              <Row>
                <Button
                  className="registerbtn"
                  type="submit"
                  value="Register"
                  variant="primary"
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
