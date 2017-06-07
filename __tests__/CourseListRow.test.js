import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import CourseListRow from '../src/components/course/CourseListRow';

function setup() {
    const props = {
      key: 1,
      course :
        {
          id: "c1", watchHref:"c1", title:"React Redux",
          authorId:"5", length:"10", category:"JavaScript"
        }
    };

    return shallow(<CourseListRow {...props}/>);
}

describe("CourseListRow should", () => {

    it("render without crashing", () => {
        const wrapper = setup();
        expect(wrapper.find("tr").length).toBe(1);
    });

});
