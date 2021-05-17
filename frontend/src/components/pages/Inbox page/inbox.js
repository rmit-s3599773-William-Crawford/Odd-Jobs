import React, { Component } from "react";
import './inbox.css'
import HomeNaveBar from './../../Layout/Home layout/HomeNaveBar';
import SearchBar from './../../Layout/Search bar/SearchBar';

class Inbox extends Component {
    render() {
        return(
        <>
        <HomeNaveBar/>
        <SearchBar/>
            <div id="wrapper">
                <div id="menu">
                    <button type="button" id="exit" class="btn cancel" onclick="closeForm()">Exit Chat</button>
                </div>
    
                <div id="chatbox"></div>
    
                <form name="message" action="">
                    <input name="usermsg" type="text" id="usermsg" />
                    <input name="submitmsg" type="submit" id="submitmsg" value="Send" />
                </form>
            </div>
            </>
    
    );
    } }
