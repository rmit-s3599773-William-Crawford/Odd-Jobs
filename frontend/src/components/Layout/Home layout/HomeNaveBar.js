import React, { Component } from "react";
import './HomeNaveBar.css'
import * as Icons from 'react-icons/bs';
import Logo from './icon1.png'

class HomeNaveBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: false,
            loggedIn: this.props.loggedIn,
        }
    }
    
    // handleClick = () => {
    //     this.setState({click: !this.state.click})
    // }

    render() {
        var MenuItems = []
        if (this.state.loggedIn) {
            MenuItems = [
               
                {
                    
                    title: 'About',
                    url: '/about',
                    cName: 'nav-links',
                },
                {
                   
                    title: 'Inbox',
                    url: '/inbox',
                    cName: 'nav-links',
                },
                {
                   
                    title: 'Contact us',
                    url: '/contact',
                    cName: 'nav-links',
                },

                {
                   
                    title: ' Profile',
                    url: '/profile',
                    cName: 'nav-links',
                },

                {
                    title: 'Post job',
                    url: '/job',
                    cName: 'nav-links',
                },

                {
                   
                    title: 'Logout',
                    url: '/logout',
                    icon: <Icons.BsBoxArrowRight />,
                    cName: 'nav-links-logout',
                }
            ]
        }
      
        else {
            MenuItems = [
                {
                    title: 'About',
                    url: '/about',
                    cName: 'nav-links',
                },
                {
                    title: 'Inbox',
                    url: '/inbox',
                    cName: 'nav-links',
                },

                {
                    title: 'Contact us',
                    url: '/contact',
                    cName: 'nav-links',
                },
                
                {
                   
                    title: ' Profile',
                    url: '/profile',
                    cName: 'nav-links',
                },

                {
                    title: 'Post job',
                    url: '/job',
                    cName: 'nav-links',
                },

                {
                    title: 'Log In',
                    url: '/login',
                    icon: <Icons.BsPeopleCircle />,
                    cName: 'nav-links-login',
                }
            ]
        }

        return (
    
            <nav className="NavbarItems">
                <a href='/'>
                
                    <h1 className="navbar-logo">
                        <img className="logo" src={Logo} alt="description of " />
                        MatchMe
                    </h1>
                </a>
            
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.click ? 'fas fa-times': 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.click ? 'nav-menu active':'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}> 
                                <a className={item.cName} href={item.url}>
                                    {item.icon} {item.title}
                                </a>
                            </li>
                        )
                    })}

                </ul>
            </nav> 
                      
           
        );
        
        
    }
   
        
    
}



export default HomeNaveBar;
