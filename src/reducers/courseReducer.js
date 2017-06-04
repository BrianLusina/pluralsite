/**
 * @author lusinabrian on 04/06/17.
 * @notes: Course reducer
 */

/**
 * course reducer takes current state and action and returns a new state
 * @param state initial state of the application store
 * @param action function to dispatch to store
 * @return {Object} new state or initial state*/
export default function courseReducer(state = [], action){
  switch (action.type){
    case "CREATE_COURSE":
      return [...state, Object.assign({}, action.course)
      ];
    default:
      return state;
  }
}
