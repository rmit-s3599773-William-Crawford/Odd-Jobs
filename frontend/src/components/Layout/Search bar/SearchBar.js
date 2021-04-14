import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";
import {Container} from "react-bootstrap";

import './SearchBar.css'
// import "bootstrap/dist/css/bootstrap.css";


class SearchBar extends Component{

    render() {
        return (
            
         <Container>

          
                    <div className="search-bar-p" > 
                        <ReactBootstrap.FormControl 
                            id="searchBar"
                            placeholder="I'm looking for.. "
                            name="searchBarHeader" 
                        />
                        <ReactBootstrap.FormControl 
                            id="searchSuburb"
                            placeholder="Suburb"
                            name="Suburb" 
                        />
                        <select className="form-control" name="categories" id="categories">
                            <option value="catg">All categories</option>
                            <option value="car">Fixing Car</option>
                            <option value="babyS">Babysitting</option>
                            <option value="DogW">Dog walker</option>
                        </select>

                        <ReactBootstrap.Button type="submit">Search</ReactBootstrap.Button>
                    </div>
            {/* </div> */}
</Container>


       );
    }
  

}

export default SearchBar;
