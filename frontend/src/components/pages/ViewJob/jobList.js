import React, { Component } from 'react';
import {Container, Button} from "react-bootstrap";
import HomeNaveBar from './../../Layout/Home layout/HomeNaveBar';
import SearchBar from './../../Layout/Search bar/SearchBar';
import './ViewJob.css';
import axios from "axios";

class jobList extends Component {
    constructor() {
        super()
        this.state = {
      userId:'',
      userEmail:'',
      title: '',
      description: '',
      location: '',
    };
    this.setJobDetails()
    }

     setJobDetails() {
        var response
        var userEmail
        var title
        var description
        var location

        response = axios.get("api/job/all")
            .then((response) => {
                userEmail = response.data.userEmail;
                title = response.data.title;
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
                    <h1>Jobs result</h1>
                    <h3>-----------------------------------</h3>
                    <table className="table">
                    <thead>
                        <tr>
                            <td>Job ID:</td>
                        </tr>
                    </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.jobId}</td>
                            </tr>
                        </tbody>
                    <thead>
                            <tr>
                                <td>Title:</td>
                            </tr>
                     </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.title}</td>
                                </tr>
                            </tbody>
                            <thead>
                            <tr>
                                <td>Name:</td>
                            </tr>
                     </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.name}</td>
                                </tr>
                            </tbody>
                        <thead>
                            <tr>
                                <td>Classification:</td>
                            </tr>
                        </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.classification}</td>
                                </tr>
                            </tbody>
                        <thead>
                            <tr>
                                <td>Description:</td>
                            </tr>
                        </thead>
                           <tbody>
                                <tr>
                                    <td>{this.state.description}</td>
                                </tr>
                            </tbody>
                        <thead>
                            <tr>
                                <td>Location:</td>
                            </tr>
                        </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.location}</td>
                                </tr>
                            </tbody>
                        <tbody>
                            <tr>
                                <td >
                                    <Button
                                        href="/inbox"
                                        className="btnEdt"
                                        style={{ float:'center', marginRight: '10px' }}>
                                        Chat
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                </div>
            </Container>

        );
    }

}

export default jobList; 
