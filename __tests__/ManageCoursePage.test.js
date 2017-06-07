import React from 'react';
import {render} from 'react-dom';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import { ManageCoursePage } from '../src/components/course/ManageCoursePage';

const setup = () => {
    const props = {
      authors: [],
      course : {id: "", watchHref:"", title:"", authorId:"", length:"", category:""},
      action: {
        saveCourse : () => {return Promise.resolve();}
      }
    };
    const wrapper = <ManageCoursePage {...props}/>;
    return {wrapper, ManageCoursePage};
};

describe("ManageCoursePage container should", function () {

    it("render without crash", () => {
        const {wrapper} = setup();

        const div = document.createElement("div");
        render(<wrapper/>, div);
    });

    it("be able to mount", () => {
        mount(<wrapper />);
    });

    it("set error message when trying to save empty title", ()=>{
      const { container } = setup();
      const wrapper = mount(<container />);

      const saveButton = wrapper.find("input").last();
      expect(saveButton.prop("type")).toBe("submit");
      saveButton.simulate("click");
      expect(wrapper.state().errors.title).toBe("Title must be at least 5 characters.");
    });
});
