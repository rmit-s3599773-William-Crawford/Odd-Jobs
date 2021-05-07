import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Form, Container, Row } from "react-bootstrap";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { GiSave } from 'react-icons/gi';
import HomeNaveBar from './../../Layout/Home layout/HomeNaveBar';
import SearchBar from './../../Layout/Search bar/SearchBar';
import './Edit_Profile.css';


     class Edit_Profile extends Component{
        constructor() {
        super()
        this.state = {
            id:'',
            userID:'',
            email:'',
            fullname:'',
            address:'',
            phone:''

        };
          this.onChange = this.onChange.bind(this);
          this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
      this.setState({ [e.target.name]: e.target.value});
    }

    onSubmit(e) {
      e.preventDefault();
      
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
                      type="text"
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

                <Form.Group controlId="formBasicFullNmae" className="txtbEdit">
                  <Form.Control
                      type="name"
                      name = "fullname"
                      placeholder="Full name"
                      value={this.state.fullname}
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
                
                <Form.Group controlId="formBasicAdress" className="txtbEdit">
                  <Form.Control
                      type ="adress"
                      name = "adress"
                      placeholder="Full adress"
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
                    href="/profile"
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

