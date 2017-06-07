import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../src/reducers/rootReducer';
import initialState from '../src/reducers/initialState';
import * as actions from '../src/actions/courseActions';


describe("Redux store", function () {
    it("should handle creating actions", function () {

        //arrange
        const store = createStore(rootReducer, initialState);

        const course = {
          title : "redux"
        };

        // act
        // TODO: create actions
        const action = actions.createCourseSuccess(course);

        store.dispatch(action);

        // assert
      const actual = store.getState().courses[0];

      const expectedValue = {
        title : "redux"
      };

      expect(actual).toEqual(expectedValue);

    });
});
