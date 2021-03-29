import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";
import './SearchBar.css'
// import "bootstrap/dist/css/bootstrap.css";


class SearchBar extends Component{

    render() {
        return (
        <div className="search-bar-p">
        {/* <ReactBootstrap.Container> */}
            {/* <ReactBootstrap.Form> */}
                <div > 
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
                {/* <ReactBootstrap.Dropdown>  */}
                    <select className="form-control" name="categories" id="categories">
                        <option value="catg">All categories</option>
                        <option value="car">Fixing Car</option>
                        <option value="babyS">Babysitting</option>
                        <option value="DogW">Dog walker</option>
                    </select>
                {/* </ReactBootstrap.Dropdown> */}

                    <ReactBootstrap.Button type="submit">Search</ReactBootstrap.Button>
                </div>
            {/* </ReactBootstrap.Form> */}
      {/* </ReactBootstrap.Container> */}
    </div>       
       );
    }
  

}

export default SearchBar;
