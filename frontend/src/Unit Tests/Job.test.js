import React from 'react';
import Jobw from "../components/pages/JobPosting Page/job.js";
import { shallow, mount  } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe(" Job page unit Test classNames", ()=> {

    it("Returns whether or not any nodes exist in the wrapper className=job-form", ()=>
    {
        //Pass
        const wrapper = mount(<div className="job-form" />);
        expect(wrapper.exists('.job-form')).toEqual(true);
        expect(wrapper.find('.job-form').exists()).toEqual(true);

    });

    it("Returns whether or not any nodes exist in the wrapper className=job-form", ()=>
    {
        //Pass
        const wrapper = mount(<div className="job-form" />);
        expect(wrapper.exists('.job-form')).toEqual(true);
        expect(wrapper.find('.jobs-form').exists()).toEqual(false);

    });

    it("Returns whether or not any nodes exist in the wrapper className=job-form", ()=>
    {
        //Fail
        const wrapper = mount(<div className="job-form" />);
        expect(wrapper.exists('.jobs-form')).toEqual(false);
        expect(wrapper.find('.job-form').exists()).toEqual(true);

    });

   


});
