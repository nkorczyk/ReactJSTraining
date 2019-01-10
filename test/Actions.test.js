import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import ACTION_TYPES from '../src/actions/types';
import initialState from '../src/reducers/initialState';
import {
  searchBy,
  sortMovies,
  searchMovieChange,
  loadMoviesSuccess,
  loadMoviesError,
  loadMoviesRequest,
  buildUrl,
  loadMovies
} from '../src/actions/actionCreator';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockSuccess = response => ({
  status: 200, response
});
const buildMockStore = (state = initialState) => {
  return mockStore(
    state
  );
};

describe('Action creator', () => {
  it('should create an action to search by movies', () => {
    const searchby = 'TITLE';
    const expectedAction = {
      type: ACTION_TYPES.SEARCH_BY,
      searchby
    };

    expect(searchBy('TITLE')).toEqual(expectedAction);
  });

  it('should create an action to sort movies', () => {
    const sortby = 'RATING';
    const expectedAction = {
      type: ACTION_TYPES.SORT_MOVIES,
      sortby
    };

    expect(sortMovies('RATING')).toEqual(expectedAction);
  });

  it('should create an action to load movies', () => {
    const expectedAction = {
      type: ACTION_TYPES.LOAD_MOVIES
    };

    expect(loadMoviesRequest()).toEqual(expectedAction);
  });

  it('should create an action to when search phrase changed', () => {
    const mock = {
      data: {
        "data": ["f"]
      }
    };
    const expectedAction = {
      type: ACTION_TYPES.SEARCH_MOVIE_CHANGE,
      phrase: {
        "data": {
          "data": ["f"]
        }
      }
    };

    expect(searchMovieChange(mock)).toEqual(expectedAction);
  });

  it('should create an action when loading movies succeed', () => {
    const mock = {
      data: {
        data: ['fifty', 'wars', 'dragon']
      }
    };
    const expectedAction = {
      type: ACTION_TYPES.LOAD_MOVIES_SUCCESS,
      movies: ['fifty', 'wars', 'dragon']
    };

    expect(loadMoviesSuccess(mock)).toEqual(expectedAction);
  });

  it('should create an action when load movies failed', () => {
    const mock = 'error';
    const expectedAction = {
      type: ACTION_TYPES.LOAD_MOVIES_ERROR,
      error: mock
    };

    expect(loadMoviesError(mock)).toEqual(expectedAction);
  });

  it('should build correct URL', () => {
    const getState = () => ({
      search: {
        searchby: 'genre',
        phrase: 'fifty'
      },
      sortby: 'RATING'
    });
    const expectedURL = 'http://react-cdp-api.herokuapp.com/movies?search=fifty&searchBy=genres&sortOrder=desc&limit=15';

    expect(buildUrl(getState)).toEqual(expectedURL);
  });

  it('should dispatch loadMoviesSuccess on success', () => {
    moxios.install();
    const store = buildMockStore();
    const response = {
      data: {
        data: ['test']
      }
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockSuccess(response.data));
    });

    const expected = [
      loadMoviesRequest(),
      loadMoviesSuccess(response)
    ];

    return store.dispatch(loadMovies())
      .then(() => {
        expect(store.getActions()).toEqual(expected);
      });
  });
});
