import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";
import {Container} from "react-bootstrap";
import { ImSearch } from 'react-icons/im';
import './SearchBar.css'


class SearchBar extends Component{

    handleClick(event) {
        console.log(this.state);
       
        };
    

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
                      
                        <ReactBootstrap.Button              
                            onClick={(event) => this.handleClick(event)} type="submit" className="searchbtn">
                            <ImSearch/>
                        </ReactBootstrap.Button>
                    </div>
            </Container>


       );
    }
  

}

export default SearchBar;
