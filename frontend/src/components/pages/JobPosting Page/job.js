import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Form, Container, Row } from "react-bootstrap";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import HomeNaveBar from './../../Layout/Home layout/HomeNaveBar';
import SearchBar from './../../Layout/Search bar/SearchBar';
import './Job.css';
 
 
class Job extends Component{
  constructor(props) {
 
    super(props);
    this.state = {
      id:"",
      title: "",
      description: "",
      classification: "",
      location: "",
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
            <Form  className="job-form">
              <h1>Job Post</h1>
 
              <Form.Group controlId="formBasicText" className="txtbr">
                <Form.Control
                  type="text"
                  placeholder="Job title"
                
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

                <input
                  type="checkbox"
                  id="babysitter"
                  name="babysitter"
                   value="babysitter"
                
                />
                <label for="babysitter"> Babysitter</label><br/>
                
                <input
                  type="checkbox"
                  id="dogwalker"
                  name="dogwalker"
               
                
                />
                <label for="dog walker"> Dog walker</label><br/>

                <input
                  type="checkbox"
                  id="carpenter"
                  name="carpenter"
                
                />
                <label for="dog walker"> Carpenter</label><br/>

                <input
                  type="checkbox"
                  id="maintenanceworker"
                  name="maintenanceworker"
                
                />
                <label for="maintenance worker"> Maintenance worker</label><br/>

                <input
                  type="checkbox"
                  id="other"
                  name="other"
                
                />
                <label for="other"> Other(includ in Job Description box)</label><br/>
                <textarea
                  rows="3"
                  cols="50"
                  placeholder="Job Description"
                  id="myTextarea"
                  type="textarea"

                />

              <Form.Group controlId="Location" className="txtbr">
                <Form.Control
                  type="text"
                  placeholder="Location"
                
                />
              </Form.Group>
 
              <Row>
                <Button
                  variant="primary"
                  onClick={(event) => this.handleClick(event)}
                  className="jobbtn"
                >
                  Post Job
                </Button>
              </Row>
            </Form>
          </div>
        </Container>
      );
  }
 
}
 
export default Job;

