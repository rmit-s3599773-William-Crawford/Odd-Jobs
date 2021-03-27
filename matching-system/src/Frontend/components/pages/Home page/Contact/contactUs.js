import React, { Component } from "react";
import './contactUs.css'
import HomeNaveBar from '../HomeNaveBar';

class contactUs extends Component {

    render() {
        return (
            <div className='bodypage'>
            {/* <HomeNaveBar/> */}
                <div className="contact-page">
                    <h2>Contact Us</h2>
                    <div className="contact-info">
                    <div className="item">
                        <i className="icon fas fa-home"></i>
                        Melbourne, Australia
                    </div>
                    <div className="item">
                        <i className="icon fas fa-phone"></i>
                        +0 000 0000000
                    </div>
                    <div className="item">
                        <i className="icon fas fa-envelope"></i>
                        email@address.com
                    </div>
                    <div className="item">
                        <i className="icon fas fa-clock"></i>
                        Mon - Fri 8:00 AM to 6:00 PM
                    </div>
                    </div>
                        <form action="" className="contact-form">
                            <input type="text" className="textb" placeholder="Your Name"/>
                            <input type="email" className="textb" placeholder="Your Email"/>
                            <textarea placeholder="Your Message"></textarea>
                            <input type="submit" className="btnSend" value='Send'/>
                        </form>
                </div>
            </div>
        );
    }
}
export default contactUs;