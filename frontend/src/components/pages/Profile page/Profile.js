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
            userID:'',
            username:'',
            fullname:'',
            address:'',
            errorMsg:'',
            phone:''

        }
        this.setUserDetails()
    }

    //TODO Setting entire state not implemented, currently only sets username.
    setUserDetails() {
        var response
        var data

        response = axios.get("api/user/current")
            .then((response) => {
                console.log(response)
                    data = response.data.email;
                console.log(data)
                    this.state.username = data;

                //refresh state for display
                    this.setState(this.state)
            })
    }

    deleteUser() {
        return function () {
            var msg = window.confirm("Are you sure about deleting the Account! this action cannot be undone?")
            if (msg) {
                window.alert("Account Successfully deleted")
                axios.delete("api/user/current/delete")
                window.location.replace("http://localhost:8080/login")
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

                    <table style={{ width: '700px' }} >
                        <thead>
                            <tr>
                                <td>Email</td>
                                <td>Full name</td>
                                <td>Personal address</td>
                                <td>Phone</td>
                                <td>Expertise/Field</td>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> {this.state.username}</td>
                                <td> {this.state.fullname}</td>
                                <td>{this.state.address}</td>
                            </tr>
                        </tbody>
                    </table>
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

