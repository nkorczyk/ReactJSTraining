import initialState from './initialState';
import ACTION_TYPES from '../actions/types';

function search(state = initialState.search, action) {
  switch (action.type) {
    case ACTION_TYPES.SEARCH_BY:
      state = {
        ...state,
        searchby: action.searchby
      };
      return state;
    case ACTION_TYPES.SEARCH_MOVIE_CHANGE:
      state = {
        ...state,
        phrase: action.phrase
      };
      return state;
    default:
      return state;
  }
}

export default search;
