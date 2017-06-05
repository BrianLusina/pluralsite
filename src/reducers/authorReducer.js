/**
 * @author lusinabrian on lusinabrian.
 * @notes: authorReducer reducer
 */

import * as types from '../constants/actionTypes';
import initalState from './initialState';

/**
 * authorReducer reducer takes current state and action and
 * returns a new state
 * @param state initial state of the application store
 * @param action function to dispatch to store
 * @return {Object} new state or initial state*/
export default function authorReducer(state = initalState.authors, action) {
    switch (action.type) {
      case types.LOAD_AUTHORS_SUCCESS:
          return action.authors;
      default:
          return state;
    }
}
