import React from 'react';
import Navbar from '../components/Layout/Home layout/HomeNaveBar.js';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("<HomeNaveBar /> Navigation bar Unit Test", () => {
    it('should render to About page', () => {
        const component = mount(<HomeNaveBar />);
        const button = component.find('li').first().children(0)
        console.log(button)
        button.simulate('click');

        expect(component.find('ul > li > a').at(0).prop('href')).toBe('/about');

    
    });

  
    it('should render to Contact page', () => {
        const component = mount(<HomeNaveBar />);
        const button = component.find('li').first().children(0)
        console.log(button)
        button.simulate('click');

        expect(component.find('ul > li > a').at(2).prop('href')).toBe('/contact');
    });

    it('should render to Login page', () => {
        const component = mount(<HomeNaveBar />);
        const button = component.find('li').first().children(0)
        console.log(button)
        button.simulate('click');

        expect(component.find('ul > li > a').at(3).prop('href')).toBe('/login');
    });
});