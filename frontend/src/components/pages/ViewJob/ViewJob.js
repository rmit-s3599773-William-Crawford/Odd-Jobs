import React, { Component } from 'react';
import { Container, Button } from "react-bootstrap";
import HomeNaveBar from './../../Layout/Home layout/HomeNaveBar';
import SearchBar from './../../Layout/Search bar/SearchBar';
import './ViewJob.css';


class ViewJob extends Component {
    constructor() {
        super()
        this.state = {
            jobId: '',
            title: '',
            description: '',
            classification: '',
            location: '',
            contact: '',
            jobs: []

        }
    }

    render() {
        return (
            <Container fluid style={{ paddingLeft: '0rem', paddingRight: '0rem' }}>
                <HomeNaveBar />
                <SearchBar />
                <div className="body">
                    <h1>My Posted Jobs</h1>
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
                        <thead>
                            <tr>
                                <td>Contact:</td>
                            </tr>
                        </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.contact}</td>
                                </tr>
                            </tbody>
                        <tbody>
                            <td >
                                <Button
                                    className="btnEdt"
                                    style={{ float:'center', marginRight: '10px' }}>
                                    Edit
                                </Button>
                                <Button
                                    className="btnEdt"
                                    style={{ float:'center' }}>
                                    Delete
                                </Button>
                            </td>
                        </tbody>
                    </table>
                    <br />
                </div>
            </Container>

        );
    }

}

export default ViewJob;
