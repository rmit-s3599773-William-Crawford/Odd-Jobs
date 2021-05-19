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
            <div id="inboxwrapper">
                <div id="inboxmenu">
                    <button type="button" id="inboxexit" class="btn cancel" onclick="closeForm()">Exit Chat</button>
                </div>
    
                <div id="chatbox"></div>
    
                <form name="inboxform" action="">
                    <input name="usermsg" type="text" id="inboxusermsg" />
                    <input name="submitmsg" type="submit" id="inboxsubmitmsg" value="Send" />
                </form>
            </div>
            </>
    
    );
    
    } }
    export default Inbox;

