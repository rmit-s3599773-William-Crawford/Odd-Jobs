
import React from 'react';
import SearchBar from "../components/Layout/Search bar/SearchBar.js";
import { shallow, mount  } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


describe(" Search bar unit Test components", ()=> {
    //Pass
    it("Returns whether or not a given react element  matches the wrapper's render tree </option>", ()=>
    {
        const wrapper = shallow(<SearchBar />);
        expect(wrapper.containsMatchingElement(<option> All categories</option>)).toEqual(true);
        expect(wrapper.containsMatchingElement(<option>Fixing Car</option>)).toEqual(true);
        expect(wrapper.containsMatchingElement(<option>Babysitting</option>)).toEqual(true);
        expect(wrapper.containsMatchingElement(<option> Dog walker</option>)).toEqual(true);

    });

      //Pass
    it("Returns whether or not the single wrapped node matches the provided selector </select>.", ()=>
    {
        const wrapper = shallow(<select className="form-control"></select>);
        expect(wrapper.is('.form-control')).toEqual(true);
    
    });

        //Pass
        it("Test the onClick event handler.", ()=>
        {
            const wrapper = mount(<SearchBar />);
            const button = wrapper.update('form-control');
            button.simulate('click');
        });

  
});

