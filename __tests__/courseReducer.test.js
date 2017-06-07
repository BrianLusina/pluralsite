import expect from 'expect';
import courseReducer from '../src/reducers/courseReducer';
import * as actions from '../src/actions/courseActions';

describe("courseReducer ", () => {
    it("should add course when passed CREATE_COURSE_SUCCESS", () => {
      // ARRANGE

      const initialState = [
        {title: "A"},
        {title: "B"}
      ];

      const newCourse = {title : "C"};

      const action = actions.createCourseSuccess(newCourse);

      // act
      const newState = courseReducer(initialState, action);

      // assert
      expect(newState.length).toEqual(3);
      expect(newState[0].title).toEqual("A");
      expect(newState[1].title).toEqual("B");
      expect(newState[2].title).toEqual("C");
    });

  it("should update course when passed UPDATE_COURSE_SUCCESS", () => {
    // ARRANGE

    const initialState = [
      {id: "A", title: "A"},
      {id: "B", title: "B"},
      {id: "C", title: "C"}
    ];

    const newCourse = {id: "D", title : "D"};

    const action = actions.updateCourseSuccess(newCourse);

    // act
    const newState = courseReducer(initialState, action);
    const updateCourse = newState.find(a => a.id === newCourse.id);
    const unTouchedCourse = newState.find(a => a.id === "A");

    // assert
    expect(updateCourse.title).toEqual("D");
    expect(unTouchedCourse.title).toEqual("A");
    expect(newState.length).toEqual(4);
  });
});
