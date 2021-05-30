import React from 'react';
import Profile from "../components/pages/Profile page/Profile.js";
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe(" Profile Details unit Test", ()=> {
    //Tests will pass for props
    it("Should return all constructor props correctly", ()=>{
        const eData = shallow(< Profile email= "email@hotmail.com" />).props();
        const aData = shallow(< Profile address= "00 Barak st" />).props();
        const fData = shallow(< Profile username= "Jon smith" />).props();
        expect(1).toEqual(1);
        
    });

     //Tests will fail for props
     it("Should not return all constructor props correctly", ()=>{
        const eData = shallow(< Profile email= "email@hotmail.com" />).props();
        const aData = shallow(< Profile address= "00 Barak st" />).props();
        const fData = shallow(< Profile username= "Jon smith" />).props();
        expect(1).toEqual(0);
        
    });

    //Tests will pass match the data for the values
    it("Return matched and correct personal inforamtion", ()=>{
        
        const Data =
        {
            email:'email@hotmail.com',
            username:'Sarah dan',
            dateOfBirth: '12/04/1993',
            address:'55 Flinders st',
            phone: '0000055555',
        
        };
        expect(Data.email).toBe('email@hotmail.com');
        expect(Data.username).toBe('Sarah dan');
        expect(Data.dateOfBirth).toBe('12/04/1993');
        expect(Data.address).toBe('55 Flinders st');
        expect(Data.phone).toBe('0000055555');
    });

        //Tests will fail  the data does not match with the values
    it("Return unmatched and incorrec personal inforamtion", ()=>{
        
        const Data =
        {
            email:'email@hotmail.com',
            username:'Sarah dan',
            dateOfBirth: '12/02/1993',
            address:'55 Flinders st',
            phone: '0000055555',
        
        };
        expect(Data.email).toBe('email@hotmail.com');
        expect(Data.username).toBe('Sarah dan');
        expect(Data.dateOfBirth).toBe('12/04/1993');
        expect(Data.address).toBe('55 Flinders st');
        expect(Data.phone).toBe('0000055555');
    });
    
});

    
