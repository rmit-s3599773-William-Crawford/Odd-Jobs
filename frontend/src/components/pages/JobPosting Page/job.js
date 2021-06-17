import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Form, Container, Row } from "react-bootstrap";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import HomeNaveBar from './../../Layout/Home layout/HomeNaveBar';
import SearchBar from './../../Layout/Search bar/SearchBar';
import style from './job.css';
import axios from "axios";
 
 
class Job extends Component{
  constructor(props) {
 
    super(props);
    this.state = {
      userId:"",
      userEmail:"",
      title: "",
      description: "",
      location: "",
      other:""
     
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
  //Click event for showing lists
   ShowHideItList(btnItandTech) {
    var ItandTechList = document.getElementById("ItandTechList");
    if (btnItandTech.value == " IT and Technology") {
        ItandTechList.style.display = "block";
        btnItandTech.value = "Hide";
    } else {
        ItandTechList.style.display = "none";
        btnItandTech.value = " IT and Technology";
    }
}
  //Click event for showing lists
ShowHideGeneralList(btnGeneral) {
  var generalList = document.getElementById("generalList");
  if (btnGeneral.value == "General") {
    generalList.style.display = "block";
    btnGeneral.value = "Hide";
  } else {
    generalList.style.display = "none";
      btnGeneral.value = "General";
  }
}
  //Click event for showing lists
ShowHideGardenList(btnGarden) {
  var gardenList = document.getElementById("gardenList");
  if (btnGarden.value == "General") {
    gardenList.style.display = "block";
    btnGarden.value = "Hide";
  } else {
    gardenList.style.display = "none";
    btnGarden.value = "General";
  }
}


ShowHideOtherList(btnGarden) {
  var gardenList = document.getElementById("gardenList");
  if (btnGarden.value == "General") {
    gardenList.style.display = "block";
    btnGarden.value = "Hide";
  } else {
    gardenList.style.display = "none";
    btnGarden.value = "General";
  }
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
          window.location.replace("http://localhost:8080/viewJobs");

        }
    )
  } 
  
  render() {
      return (
      <Container>
      <HomeNaveBar/>
      <SearchBar/>
        <div className="bottom-text">
          <a href="/viewJobs" style={{ fontSize:"20px" }}>
            {" "}
            MyJobs{" "}
          </a>
        </div>
      <div>
      <Form className="job-form"  onSubmit={this.onSubmit}>
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
      <span>Show</span>
        <input id="btnItandTech" type="button" value=" IT and Technology" onClick={this.ShowHideItList} />
        <br />
        <div id="ItandTechList" style={{display: "none"}}>
          <ul>
            <li>Fix TV<input type="checkbox"/></li>
            <li>Fix PC/Laptop<input type="checkbox" /></li>
            <li> Fix TV<input type="checkbox" /></li>
          </ul>

        </div>
          <span>Show</span>
          <input id="btnGeneral" type="button" value="General" onClick={this.ShowHideGeneralList} />
          <div id="generalList" style={{display: "none"}}>
            <ul>
              <li> Dogs Walker<input type="checkbox"/></li>
              <li>Babysitter<input type="checkbox" /></li>
              <li>Arts<input type="checkbox" /></li>
            </ul>
          </div>
          <br/>
          <span>Show</span>
          <input id="btnGarden" type="button" value="Garden" onClick={this.ShowHideGardenList} />
          <div id="gardenList" style={{display: "none"}}>
            <ul>
              <li>Grass mowing<input type="checkbox"/></li>
              <li>crop cultivation<input type="checkbox" /></li>
              <li>Garden decoration<input type="checkbox" /></li>
            </ul>
          </div>
          <br/>
            <span>Other</span>
            <label id="other" htmlFor="other"> Other(includ in Job Description box)</label><br/>
              <textarea
                type="textarea"
                size="30"
                rows="3"
                cols="50"
                name="other"
                id="other"
                placeholder="Job Description"
                value={this.state.description}
                onChange={this.onChange}
                value={this.state.other}
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

