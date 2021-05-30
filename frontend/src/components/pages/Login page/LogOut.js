import React, { Component } from "react";
import  { Redirect } from 'react-router-dom'

class LogOut extends Component {

    componentDidMount() {
        // window.location.reload(true);
        // localStorage.clear();
        alert("Successfully logedout");


    }

    render() {
        return(
            <>
                <Redirect to='/login' /> 
               
            </>
        );
    }
}

export default LogOut;