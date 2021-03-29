import React, { Component } from "react";
import { FaLocationArrow, FaPhoneVolume, FaCalendarAlt  } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './contactUs.css'




class contactUs extends Component {

    render() {
        return (
            <div className='bodypage'>
            {/* <HomeNaveBar/> */}
                <div className="contact-page">
                    <h2>Contact Us</h2>
                <div className="contact-info">
                        <div className="item">
                        <a style={{ margin: "10px" }}>
                            <FaLocationArrow/>
                        </a>
                            Melbourne, Australia
                        </div>
                        <div className="item">
                        <a style={{ margin: "10px" }}>
                            <FaPhoneVolume/>
                        </a>
                            +0 000 0000000
                        </div>
                        <div className="item">
                        <a style={{ margin: "10px" }}>

                            <MdEmail/>
                        </a>
                            email@address.com
                        </div>
                    <div className="item">
                    <a style={{ margin: "10px" }}>

                        <FaCalendarAlt/>
                    </a>
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