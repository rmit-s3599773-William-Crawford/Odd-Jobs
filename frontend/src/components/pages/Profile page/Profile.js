import React, { Component } from 'react';
import {Container, Button} from "react-bootstrap";
import HomeNaveBar from './../../Layout/Home layout/HomeNaveBar';
import SearchBar from './../../Layout/Search bar/SearchBar';
import './Profile.css';
import axios from "axios";


     class Profile extends Component{
        constructor() {
            super()
        this.state = {
            id:'',
            username:'',
            fullname:'',
            address:'',
            phone:''

        }
        this.setUserDetails()
    }

    setUserDetails() {
        var response
        var id
        var email
        var firstName
        var lastName
        var address
        var phone
        var expertise
        //Get and store current user
        response = axios.get("api/user/current")
            .then((response) => {
                id = response.data.id;
                email = response.data.email;
                firstName = response.data.firstName;
                lastName = response.data.lastName;
                address = response.data.address;
                phone = response.data.phone;

                this.state.id = id;
                this.state.email = email;
                this.state.firstName = response.data.firstName;
                this.state.lastName = response.data.lastName;
                this.state.address = address;
                this.state.phone = phone;
 
                //refresh state for display
                    this.setState(this.state)
            })
    }



    //Api for user can able to delete account
    deleteUser() {
        return function () {
            var msg = window.confirm("Are you sure about deleting the Account! this action cannot be undone?")
            if (msg) {
                window.alert("Account Successfully deleted")
                axios.delete("api/user/current/delete")
                window.location.replace("http://localhost:8080/login")
                window.sessionStorage.clear();
            }else if(msg == false) {
                
            }
           
        }
    }
    
  
    render () {
        return (      
           <Container fluid style={{paddingLeft:'0rem', paddingRight:'0rem'}}>
            <HomeNaveBar/>
              <SearchBar/>
              <div className="body" style={{ marginLeft:'25%'}}>
                <h1>Profile Details</h1>  
                <h3>-----------------------------------</h3>  
                <br/>
                    <table style={{ width: '700px' }} >
                        <thead>
                            <tr>
                                <td>Full name</td>
                                <td>Personal address</td>
                                <td>Phone</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> {this.state.firstName} {this.state.lastName}</td>
                                <td>{this.state.address}</td>
                                <td>{this.state.phone}</td>
                            </tr>
                        </tbody>
                    </table>
                    <br/>
                    <table style={{ width: '550px' }} >
                    <thead>
                            <tr>
                                <td>Email</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> {this.state.email}</td>
                            </tr>
                        </tbody>
                    </table>
                    <br/>
                    <table style={{ width: '550px' }} >
                    <thead>
                            <tr>
                                <td>Expertise/Field</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> {this.state.expertise}</td>
                            </tr>
                        </tbody>
                    </table>
                    <br/>
                    <br/>
                    <br/>
                    <Button
                        className='btnEdt'
                        href={'/editprofile'}
                        style={{ marginRight: '10px' }}
                        >
                        Edit
                    </Button>
                    
                    <Button
                        className='btnDel'
                        onClick={this.deleteUser()}
                       >
                        Delete
                    </Button>
             </div> 
          </Container>
            
        );
     }
         
       
}
    
export default Profile;

