/**
 * @author lusinabrian on 04/06/17.
 * @notes: Root reducer
 */

import { combineReducers } from 'redux';
import courses from './courseReducer';

/**
 * Combines all reducers for use in the application
 * Uses short hand property names from ES6
 * */
const rootReducer = combineReducers({
  courses
});

export default rootReducer;
