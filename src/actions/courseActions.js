/**
 * @author lusinabrian on 04/06/17.
 * @notes: create course actions
 */
import * as types from '../constants/actionTypes';
import courseApi from '../api/mockCourseApi';

/**
 * Action to creates a course
 * @param courses
 * @returns {object} returns an object*/
export function createCourse(courses){
  return { type: types.LOAD_COURSES_SUCCESS, courses};
}

/**
 * Load courses from api
 * */
export function loadCourses(){
  return function (dispatch) {
   return courseApi.getAllCourses().then(courses => {
     //dispatch(loadCoursesSuccess(courses));
   }).catch(error => {
     throw(error);
   });
  };
}
