import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Form, Container, Row } from "react-bootstrap";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { GiSave } from 'react-icons/gi';
import HomeNaveBar from './../../Layout/Home layout/HomeNaveBar';
import SearchBar from './../../Layout/Search bar/SearchBar';
import './Edit_Profile.css';
import axios from "axios";


     class Edit_Profile extends Component{
        constructor() {
        super()
        this.state = {
            id:'',
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            address:'',
            phone:''
        };
        //Get ID of current User to send with form submission
        var response = axios.get("api/user/current")
                .then((response) => {
                    var data = response.data.id;
                    this.state.id = data;
                    this.setState(this.state)
                })
          this.onChange = this.onChange.bind(this);
          this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
      this.setState({ [e.target.name]: e.target.value});
    }

    onSubmit(e) {
      var msg = window.confirm("Are you sure about changing details?")
      if (msg) {
          e.preventDefault()
          window.alert("Changes Successfully Saved")
          axios.put("api/user/update", this.state)
          window.location.replace("http://localhost:8080/profile")
          console.log(this.state)
      }else if(msg == false) {}
     
      
    }
  
  
  
    render () {
        return (      
           <Container fluid style={{paddingLeft:'0rem', paddingRight:'0rem'}}>
            <HomeNaveBar/>
              <SearchBar/>
                <Form className="edit-form" onSubmit={this.onSubmit}>
                <h1>Edit</h1>
                <Form.Group  className="txtbEdit">
                  <Form.Control controlId="formBasicEmail"
                      type = "email"
                      name = "email"
                      placeholder="Enter email"
                      value={this.state.email}
                      onChange={this.onChange}
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className="txtbEdit">
                  <Form.Control
                      type="password"
                      name = "password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.onChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicFirstName" className="txtbEdit">
                    <Form.Control
                        type="name"
                        name = "firstname"
                        placeholder="First name"
                        value={this.state.firstName}
                        onChange={this.onChange}
                    />
                </Form.Group>

                <Form.Group controlId="formBasiclName" className="txtbEdit">
                  <Form.Control
                      type="name"
                      name = "lastname"
                      placeholder="Last name"
                      value={this.state.lastName}
                      onChange={this.onChange}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPhone" className="txtbEdit">
                  <Form.Control
                      type="phone"
                      name = "phone"
                      placeholder="Phone ##-###-#####"
                      value={this.state.phone}
                      onChange={this.onChange}        
                  />
                </Form.Group>
                
                <Form.Group controlId="formBasicAddress" className="txtbEdit">
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
                    type="submit"
                    variant="primary"
                    // onClick={(event) => this.handleClick(event)}
                    className="Editbtn"
                   >
                    <GiSave/>
                  </Button>
                </Row>
              </Form>
          </Container>
            
        );
     }
         
       
}
    
export default Edit_Profile;

