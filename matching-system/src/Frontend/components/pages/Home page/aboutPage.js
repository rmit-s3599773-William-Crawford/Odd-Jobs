import React, { Component } from "react";
import './aboutPage.css';
import HomeNaveBar from './HomeNaveBar';

class About extends Component {

    render() {
        return(
        <>
        <HomeNaveBar/>
            <div className="about-section">
                <div className="inner-container">
                    <h1 style={{color:'black'}}>Find jobs trade in your area</h1>
                    <p className="text">
                    Need to replace a flat tire? or fixing something in your household even if you want a light bulb to be change
                    Our website Matchme offers YOU to find any services given by our registered job traders! Join us for free all
                    it takes is one word to find what you are looking for!
                    </p>
                    <div className="skills">
                        <span>More than 30 Services</span>
                        <span>Efficient and fast</span>
                        <span>Safe and Trusted</span>
                    </div>
                    <a href="/login">
                        <button className="StartNow">Start Now</button>
                    </a>
                </div>
            </div>
        </>

            
        );
    }
}
export default About;