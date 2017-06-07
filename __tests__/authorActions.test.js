import expect from 'expect';
import * as actions from '../src/actions/authorActions';
import * as types from '../src/constants/actionTypes';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("authorActions should", () => {

    /**
     * After each test, clean up the test environment using nock
     */
    afterEach(() => {
        nock.cleanAll();
    });

    /**
     * callback to tell nock we are done with the
     */
    it("should create BEGIN_AJAX_CALL LOAD_AUTHORS_SUCCESS when loading courses", (done) => {
        const expectedActions = [
          {type: types.BEGIN_AJAX_CALL},
          {
            type: types.LOAD_AUTHORS_SUCCESS, body: {
              authors: [
                {
                  id:"l",
                  firstName:"L",
                  lastName:"lo"
                }
              ]}
          }
        ];

        const store = mockStore({authors: []}, expectedActions);

        store.dispatch(actions.loadAuthors()).then(() => {
          const storeActions = store.getActions();

          expect(storeActions[0].type).toEqual(types.BEGIN_AJAX_CALL);
          expect(storeActions[1].type).toEqual(types.LOAD_AUTHORS_SUCCESS);

          // called last to signify that we are done with async
          done();
        });

    });
});
