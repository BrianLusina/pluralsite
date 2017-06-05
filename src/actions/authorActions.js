/**
 * @author lusinabrian on 04/06/17.
 * @notes: holds all the actions
 */
import * as types from '../constants/actionTypes';
import authorApi from '../api/mockAuthorApi';

/**
 * action to load authors
 * @param authors
 * @returns {object} returns an object*/
export function loadAuthorsSuccess(authors){
  return { type: types.LOAD_AUTHORS_SUCCESS, authors};
}

/**
 * Load courses from api
 * */
export function loadAuthors(){
  return function (dispatch) {
    return authorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}
