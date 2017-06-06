import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import CourseForm from '../src/components/course/CourseForm';

/**
 * Setup the application tests
 */
function setup(saving) {
  const props = {
    course: {},
    saving: saving,
    errors:{},
    onSave: () => {},
    onChange: () => {}
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props}/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe("CourseForm should", () => {

  it("render without crash", () => {
    const {output} = setup();
    expect(output.type).toBe("form");

    let [ h1 ] = output.props.children;
    expect(h1.type).toBe("h1");
  });

  it("save button should display save when not saving", () => {
    const { output } = setup(false);
    const submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe("Save");
  });

  it("save button should display Saving... when saving", () => {
    const { output } = setup(true);
    const submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe("Saving...");
  });

});
