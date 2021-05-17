import React from 'react';
import Login from '../components/pages/Login page/Login.js';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });

describe("Register Unit Test", () => {


    const wrapper = shallow(<Login />);
    it('should have input for email and password', ()=> {
        expect(wrapper.find('.txtb.form-group input[type="email"]')).toHaveLength(0);
        expect(wrapper.find('.txtb.form-group input[type="password"]')).toHaveLength(0);
       
    })
    
    
});