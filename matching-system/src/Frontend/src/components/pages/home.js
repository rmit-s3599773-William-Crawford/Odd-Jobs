import React, {Component} from "react";

class Home extends Component{

    render() {
        return(
            <>
            <div >
                <div className="inner-container">
                    <h1 style={{color:'black'}}>Save your time</h1>
                    <p className="text">
                        Need work done starting today!
                    </p>
                    <div className="skills">
                        <span>Services</span>
                        <span>Booking Appointments</span>
                        <span>All-Online</span>
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
export default Home;

