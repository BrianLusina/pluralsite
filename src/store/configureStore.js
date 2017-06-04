/**
 * @author lusinabrian on 04/06/17.
 * @notes: Redux Store
 */

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

/**
 * Configures the application store
 * */
export default function configureStore(initialState){
  return createStore(
    rootReducer, initialState,
    applyMiddleware(reduxImmutableStateInvariant(),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );
}
