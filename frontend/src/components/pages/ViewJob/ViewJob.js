import React, { Component } from 'react';
import { Container, Button } from "react-bootstrap";
import HomeNaveBar from './../../Layout/Home layout/HomeNaveBar';
import SearchBar from './../../Layout/Search bar/SearchBar';
import './ViewJob.css';


class ViewJob extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            title: '',
            description: '',
            classification: '',
            location: '',
            contact: '',

        }
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
                            <td>Classification:</td>
                            <td>{this.state.classification}</td>
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
                            <td>{this.state.contact}</td>
                        </tr>
                    </table>
                    <br />
                </div>
            </Container>

        );
    }

}

export default ViewJob;
