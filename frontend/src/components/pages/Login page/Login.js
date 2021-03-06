import React, { Component } from "react";
import { Button, Form, Container, Row } from "react-bootstrap";
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
    console.log(this.state);
    e.preventDefault();
    axios({
      method: "post",
      url:'/login',
      params:{
        username: this.state.username,
        password: this.state.password,
      }
    }).finally(()=> {
        alert("Successfully Loggedin");
        window.location.replace("http://localhost:8080/job");
        if( window.sessionStorage.setItem("loggedIn", true))
        {
          window.location.replace("http://localhost:8080/login")
          window.sessionStorage.clear();

        }
        else if (window.sessionStorage.setItem('loggedOut', false))
          {

          } 

          else  if (window.sessionStorage.setItem("loggedIn", false))
          {
          
          }
          else  
          {

          }
    })

  }
  
  render() {
      return (
        <Container>
          <div>
            <Form className="login-form"  onSubmit={this.onSubmit} >
              <h1>Login</h1>

              <Form.Group controlId="formBasicEmail" className="txtb">
                <Form.Control
                    type="text"
                    name = "username"
                    placeholder="Enter email"
                    value={this.state.username}
                    onChange={this.onChange}
                    required
                 
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
                    required
                 
                />
              </Form.Group>

              <Row>
                <Button
                  className="logbtn"
                  type="submit"
                  value="Sign in"
                  variant="primary"

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
              <div className="bottom-text">
                Learn more about OddJobs
                  <a href="/about" style={{ textDecoration: "none" }}>
                    {" "}
                    About us{" "}
                  </a>
                </div>
            </Form>
          </div>
        </Container>
      );
  }

}

export default Login;