/**
 * @author lusinabrian on 04/06/17.
 * @notes: create course actions
 */
import * as types from '../constants/actionTypes';
import courseApi from '../api/mockCourseApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

/**
 * Action to creates a course
 * @param courses
 * @returns {object} returns an object*/
export function loadCoursesSuccess(courses){
  return { type: types.LOAD_COURSES_SUCCESS, courses};
}

/**
 * Action to create course
 * */
export function createCourseSuccess(course){
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

/**
 * Action to update course
 * */
export function updateCourseSuccess(course){
  return { type: types.UPDATE_COURSE_SUCCESS, course};
}

/**
 * Load courses from api
 * */
export function loadCourses(){
  return function (dispatch) {
    dispatch(beginAjaxCall());
   return courseApi.getAllCourses().then(courses => {
     dispatch(loadCoursesSuccess(courses));
   }).catch(error => {
     throw(error);
   });
  };
}

/**
 * Saves course to api
 * @param course to save to api
 * @return function
 * */
export function saveCourse(course){

  /**
   * getState is for accessing redux store directly
   * */
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) :
        dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw error;
    });
  };
}
