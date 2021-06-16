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
      logOut: "",
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
        password: this.state.password
      }
    }).finally(()=> {
        alert("Successfully Loggedin");
        window.location.replace("http://localhost:8080/job");
        if(window.sessionStorage.setItem("loggedIn", true)){
          // window.location.reload(true);
        } 
        else  if ( window.sessionStorage.setItem('loggedOut', true))
          {
            // this.LogOut();
            // sessionStorage.clear();
            // return function () {
            //   var msg = window.confirm("LogOut?")
            //   if (msg) {
            //       window.alert("LoggingOut plesse wait");
            //       // sessionStorage.clear();
            //       window.location.reload();
            //       window.location.replace("http://localhost:8080/login?logout")
            //       window.sessionStorage.clear();
            //   }else if(msg == false) {
                  
            //   }
            // }
          } 

          // else  if (window.sessionStorage.setItem('loggedOut' ,true))
          // {
          //   window.sessionStorage.clear();
          //   window.location.reload();
            // window.sessionStorage.getItem('loggedOut') == 'false';

            // window.sessionStorage.setItem('loggedOut', true);
            // sessionStorage.clear();
          //} 
          // else  if (window.sessionStorage.setItem('loggedOut', 'true'))
          // {
          //   // localStorage.clear();
          // }
          else  
          {
          }
    })
    //.then(()=> {
        // if (window.sessionStorage.setItem('loggedOut' ,true))
        // {
        //     window.sessionStorage.clear();
        //     window.location.reload();
        // } else{

        // }
        // return function () {
        //   var msg = window.confirm("LogOut?")
        //   if (msg && (window.sessionStorage.setItem('loggedOut' ,true))) {
        //       window.alert("LoggingOut plesse wait");
        //       // sessionStorage.clear();
        //       // window.location.reload();
        //       window.location.replace("http://localhost:8080/login?logout")
        //       window.sessionStorage.clear();
        //   }else if(msg == false) {
              
        //   }
        // }

     // })

  }


//   LogOut()
// {
//     return function ()
//     {
//       var msg = window.confirm("LogOut?")
//       if (msg)
//       {
//           window.alert("LoggingOut plese wait");
//           // sessionStorage.clear();
//           // window.location.reload();
//           window.location.replace("http://localhost:8080/login?logout")
//           window.sessionStorage.clear();
//       }else if(msg == false) {}
//     }
//   }
      
  
  
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