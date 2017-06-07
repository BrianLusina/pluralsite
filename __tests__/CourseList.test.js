import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import CourseList from '../src/components/course/CourseList';

function setup() {
    const props = {
      courses: [],
      deleteCourse: () => {}
    };

    return shallow(<CourseList {...props}/>);
}

describe("CourseList should", () => {

    it("render without crashing", () => {
        const wrapper = setup();
        expect(wrapper.find("table").length).toBe(1);
    });

    it("", ()=>{

    });

});
