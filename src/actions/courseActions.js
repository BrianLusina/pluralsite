/**
 * @author lusinabrian on 04/06/17.
 * @notes: create course actions
 */
import * as types from '../constants/actionTypes';

/**
 * Action to creates a course
 * @param course
 * @returns {object} returns an object*/
export function createCourse(course){
  return { type: types.CREATE_COURSE, course};
}
