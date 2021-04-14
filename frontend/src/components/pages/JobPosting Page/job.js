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
            <Form className="job-form">
              <h1>Job Post</h1>
 
              <Form.Group controlId="formBasicText" className="txtbr">
                <Form.Control
                  type="text"
                  placeholder="Job Title"
                
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
 
              <Form.Group controlId="formBasicText" className="description input">
                <Form.Control
                  type="text"
                  placeholder="Job Description"
                
                />
              </Form.Group>
              <Form.Group controlId="formBasicText" className="txtbr">
                <Form.Control
                  type="text"
                  placeholder="Job Category (eg. trades, construction, design, gardening, business/admin)"
                
                />
              </Form.Group>
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

