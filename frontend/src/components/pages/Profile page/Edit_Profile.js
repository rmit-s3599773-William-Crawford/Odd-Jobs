import React, { Component } from 'react';
import {Container, Button} from "react-bootstrap";
import HomeNaveBar from './../../Layout/Home layout/HomeNaveBar';
import SearchBar from './../../Layout/Search bar/SearchBar';
import './Profile.css';


     class Edit_Profile extends Component{
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
                <h1>Edit Profile Details</h1>  
                <h3>-----------------------------------</h3>  
                

             </div> 
          </Container>
            
        );
     }
         
       
}
    
export default Edit_Profile;

