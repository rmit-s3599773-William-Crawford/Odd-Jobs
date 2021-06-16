import React, { Component } from "react";
import './HomeNaveBar.css'
import * as Icons from 'react-icons/bs';
import Logo from './OddJobLogo.png'

class HomeNaveBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: false,
            loggedIn: this.props.loggedIn,
            username: this.props.username,
            logOut:false,


        }
    }
    
    handleClick(){
        this.setState({click: !this.state.click});
        this.setState({logOut: !this.state.logOut});

        // return function ()
        // {
        //   var msg = window.confirm("LogOut?")
        //   if (msg)
        //   {
        //       window.alert("LoggingOut plese wait");
        //       // sessionStorage.clear();
        //       // window.location.reload();
        //       window.location.replace("http://localhost:8080/login?logout")
        //       window.sessionStorage.clear();
        //   }else if(msg == false) {}
        // }

    }

    // LogOut()
    // {
    //     var txt;
    //     txt = confirm("Press a button!\nEither OK or Cancel.\nThe button you pressed will be displayed in the result window.");
    //     if ( this.state.logOut == true ) {
    //         aleart("You pressed OK!");
    //     } else {
    //         aleart("You pressed Cancel!");
    //     }

    //     return function ()
    //     {
    //       var msg = window.confirm("LogOut?")
    //       if (msg)
    //       {
    //           window.alert("LoggingOut plese wait");
    //           // sessionStorage.clear();
    //           // window.location.reload();
    //           window.location.replace("http://localhost:8080/login?logout")
    //           window.sessionStorage.clear();
    //       }else if(msg == false) {}
    //     }
    //   }

    render() {
        var MenuItems = []
        if ( window.sessionStorage.getItem('loggedIn') == 'true') {
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
                    logOut: 'Logout',
                    // onClick: onClick=this.LogOut(),
                    
                    
                    
                }
            ]
        }
        else if ( window.sessionStorage.getItem('loggedOut') == 'true') {
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
        
        else{
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
                        
                    </h1>
                </a>
            
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.click ? 'fas fa-times': 'fas fa-bars'}></i>
                </div>
                {/* <div className="nav-links-logout:hover" onClick={this.handleClick()}>
                <i className={this.state.logOut ? 'fas fa-times': 'fas fa-bars'}></i>
                </div> */}
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
