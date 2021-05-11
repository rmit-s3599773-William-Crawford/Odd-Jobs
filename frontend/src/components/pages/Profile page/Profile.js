import React, { Component } from 'react';
import {Container, Button} from "react-bootstrap";
import HomeNaveBar from './../../Layout/Home layout/HomeNaveBar';
import SearchBar from './../../Layout/Search bar/SearchBar';
import './Profile.css';


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
                                <td> Email</td>
                                <td> Full name</td>
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
                        style={{ marginRight: '10px' }}>
                        Edit
                    </Button>
                    
                    <Button
                        className='btnDel'
                        href='/login'>
                        Delete
                    </Button>
             </div> 
          </Container>
            
        );
     }
         
       
}
    
export default Profile;

