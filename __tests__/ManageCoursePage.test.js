import React from 'react';
import {render} from 'react-dom';
import expect from 'expect';
import {shallow} from 'enzyme';
import ManageCoursePage from '../src/components/course/ManageCoursePage';

const setup = () => {
    const props = {};
    const Wrapper = <ManageCoursePage {...props}/>;
    return {Wrapper, ManageCoursePage};
};

describe("ManageCoursePage container should", function () {

    it("render without crash", () => {
        const {Wrapper} = setup();

        const div = document.createElement("div");
        render(<Wrapper/>, div);
    });
});
