import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Form, Container, Row } from "react-bootstrap";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import HomeNaveBar from './../../Layout/Home layout/HomeNaveBar';
import SearchBar from './../../Layout/Search bar/SearchBar';
import './Job.css';
import axios from "axios";
 
 
class Job extends Component{
  constructor(props) {
 
    super(props);
    this.state = {
      userId:"",
      userEmail:"",
      title: "",
      field: "",
      description: "",
      location: "",
    };
    this.setUserDetails()
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //Get and set current userId for Job Posting
  setUserDetails() {
    var response

    response = axios.get("api/user/current")
        .then((response) => {
          response = response.data;
          console.log(response);

          //Set state userId
          this.state.userId = response.id;
          this.state.userEmail = response.email;

          //refresh state
          this.setState(this.state)
        })
  }
 
  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    let newJob = this.state;
    console.log(newJob);

    axios.post("/api/job/post", newJob)
        .finally( ()=> {
          alert("Job successfully created")
          // window.history.back()
        }
    )
  }
  
  render() {
      return (
        <Container>
        <HomeNaveBar/>
        <SearchBar/>
 
          <div>
            <Form  className="job-form" onSubmit={this.onSubmit}>
              <h1>Job Post</h1>
 
              <Form.Group controlId="formBasicText" className="txtbr">
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Job title"
                  value={this.state.title}
                  onChange={this.onChange}
                  required
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
                  name="description"
                  placeholder="Job Description"
                  id="myTextarea"
                  type="textarea"
                  value={this.state.description}
                  onChange={this.onChange}

                />

              <Form.Group controlId="Location" className="txtbr">
                <Form.Control
                    name="location"
                    placeholder="Location"
                    value={this.state.location}
                    onChange={this.onChange}
                    required
                
                />
              </Form.Group>
 
              <Row>
                <Button
                  variant="primary"
                  // onClick={(event) => this.handleClick(event)}
                  className="jobbtn"
                  type="submit"
                  value="post"
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

