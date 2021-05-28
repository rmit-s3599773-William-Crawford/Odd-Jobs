import React, { Component } from 'react';
import { Container, Button } from "react-bootstrap";
import HomeNaveBar from './../../Layout/Home layout/HomeNaveBar';
import SearchBar from './../../Layout/Search bar/SearchBar';
import './ViewJob.css';
import axios from "axios";

class ViewJob extends Component {
    constructor() {
        super()
        this.state = {
      userId:'',
      userEmail:'',
      title: '',
      field: '',
      description: '',
      location: '',
    };
    this.setJobDetails()
    }
    
     setJobDetails() {
        var response
        var userId
        var userEmail
        var title
        var field
        var description
        var location

 

        response = axios.get("api/job/current")
            .then((response) => {
                userId = response.data.userId;
                userEmail = response.data.userEmail;
                title = response.data.title;
                field = response.data.field;
                description = response.data.description;
                location = response.data.location;

                this.state.userId = userId;
                this.state.userEmail = userEmail;
                this.state.title = response.data.title;
                this.state.field = response.data.field;
                this.state.description = description;
                this.state.location = location;

                    this.setState(this.state)
            })
    }


    render() {
        return (
            <Container fluid style={{ paddingLeft: '0rem', paddingRight: '0rem' }}>
                <HomeNaveBar />
                <SearchBar />
                <div className="body">
                    <h1>Job Post</h1>
                    <h3>-----------------------------------</h3>
                    <table style="table">
                        <tr>
                            <td>Title:</td>
                            <td>{this.state.title}</td>
                        </tr>
                        <tr>
                            <td>Field:</td>
                            <td>{this.state.field}</td>
                        </tr>
                        <tr>
                            <td>Description:</td>
                            <td>{this.state.description}</td>
                        </tr>
                        <tr>
                            <td>Location:</td>
                            <td>{this.state.location}</td>
                        </tr>
                        <tr>
                            <td>Contact:</td>
                            <td>{this.state.userEmail}</td>
                        </tr>
                    </table>
                    <br/>
                </div>
            </Container>

        );
    }

}

export default ViewJob;
