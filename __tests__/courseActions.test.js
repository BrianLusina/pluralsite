/**
 * @author lusinabrian on 07/06/17.
 * @notes: Course actions test
 */
import expect from 'expect';
import * as courseActions from '../src/actions/courseActions';
import * as types from '../src/constants/actionTypes';

describe("Course actions", function(){

  describe("createCourseSuccess", function () {

    it("should create a CREATE_COURSE_SUCCESS action", function () {
      const course = {id:"clean-code", title:"Clean code"};
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        course
      };

      const action = courseActions.createCourseSuccess(course);

      expect(action).toEqual(expectedAction);
    });

  });

});
