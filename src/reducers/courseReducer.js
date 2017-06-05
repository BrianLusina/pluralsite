/**
 * @author lusinabrian on 04/06/17.
 * @notes: Course reducer
 */
import * as types from '../constants/actionTypes';
import initalState from './initialState';

/**
 * course reducer takes current state and action and returns a new state
 * @param state initial state of the application store
 * @param action function to dispatch to store
 * @return {Object} new state or initial state*/
export default function courseReducer(state = initalState.courses, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    case types.CREATE_COURSE_SUCCESS:
      return [
        ...state, Object.assign({}, action.course)
      ];

    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}
