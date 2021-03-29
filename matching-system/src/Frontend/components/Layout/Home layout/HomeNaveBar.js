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
            business: this.props.business
        }
    }
    
    handleClick = () => {
        this.setState({click: !this.state.click})
    }

    render() {
        var MenuItems = []
        if (this.state.loggedIn) {
            MenuItems = [
               
                {
                    id:'1',
                    title: 'About',
                    url: '/about',
                    cName: 'nav-links',
                },
                {
                    id:'2',
                    title: 'Search',
                    url: '',
                    cName: 'nav-links',
                },
                {
                    id:'3',
                    title: 'Contact us',
                    url: '/contact',
                    cName: 'nav-links',
                },
                {
                    id:'4',
                    title: 'Logout',
                    url: '/LogOut',
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
                    title: 'Search',
                    url: '',
                    cName: 'nav-links',
                },
                {
                    title: 'Contact us',
                    url: '/contact',
                    cName: 'nav-links',
                },
                {
                    title: 'Login',
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
