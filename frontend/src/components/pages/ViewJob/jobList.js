import React, { Component } from 'react';
import {Container, Button} from "react-bootstrap";
import HomeNaveBar from './../../Layout/Home layout/HomeNaveBar';
import SearchBar from './../../Layout/Search bar/SearchBar';
import './jobList.css';
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
        var userEmail
        var title
        var field
        var description
        var location


        response = axios.get("api/job/all")
            .then((response) => {
                userEmail = response.data.userEmail;
                title = response.data.title;
                field = response.data.field;
                description = response.data.description;
                location = response.data.location;

            })
    }


    render() {
        return (
            <Container fluid style={{ paddingLeft: '0rem', paddingRight: '0rem' }}>
                <HomeNaveBar />
                <SearchBar />
                <div className="body">
                    <h1>Jobs</h1>
                    <h3>-----------------------------------</h3>
                    <table style="table">
                        <tr>
                            <td>Title:</td>
                            <td>{response.data.title}</td>
                        </tr>
                        <tr>
                            <td>Field:</td>
                            <td>{response.data.field}</td>
                        </tr>
                        <tr>
                            <td>Description:</td>
                            <td>{response.data.description}</td>
                        </tr>
                        <tr>
                            <td>Location:</td>
                            <td>{response.data.location}</td>
                        </tr>
                        <tr>
                            <td>Contact:</td>
                            <td>{response.data.userEmail}</td>
                        </tr>
                    </table>
                    <br/>
                </div>
            </Container>

        );
    }

}
export default jobList;