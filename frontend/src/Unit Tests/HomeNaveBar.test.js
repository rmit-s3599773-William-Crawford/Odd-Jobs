import React from 'react';
import HomeNaveBar from '../components/Layout/Home layout/HomeNaveBar.js';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });
//pass
describe("HomeNaveBar Unit Test", () => {
    it('should render to About page', () => {
        const component = mount(<HomeNaveBar />);
        const button = component.find('li').first().children(0)
        console.log(button)
        button.simulate('click');

        expect(component.find('ul > li > a').at(0).prop('href')).toBe('/about');

    
    });

    //pass
    it('should render to Contact page', () => {
        const component = mount(<HomeNaveBar />);
        const button = component.find('li').first().children(0)
        console.log(button)
        button.simulate('click');

        expect(component.find('ul > li > a').at(2).prop('href')).toBe('/contact');
    });



      //pass
      it('should render to Profile  page', () => {
        const component = mount(<HomeNaveBar />);
        const button = component.find('li').first().children(0)
        console.log(button)
        button.simulate('click');

        expect(component.find('ul > li > a').at(3).prop('href')).toBe('/profile');
    });
    
     //pass
     it('should render to job  page', () => {
        const component = mount(<HomeNaveBar />);
        const button = component.find('li').first().children(0)
        console.log(button)
        button.simulate('click');

        expect(component.find('ul > li > a').at(4).prop('href')).toBe('/job');
    });

    //pass
    it('should render to Login page', () => {
        const component = mount(<HomeNaveBar />);
        const button = component.find('li').first().children(0)
        console.log(button)
        button.simulate('click');

        expect(component.find('ul > li > a').at(5).prop('href')).toBe('/login');
    });
});