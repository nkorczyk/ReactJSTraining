import initialState from './initialState';
import ACTION_TYPES from '../actions/types';

function search(state = initialState.search, action) {
  switch (action.type) {
    case ACTION_TYPES.SEARCH_BY:
      return {
        ...state,
        searchby: action.searchby,
      };
    case ACTION_TYPES.SEARCH_MOVIE_CHANGE:
      return {
        ...state,
        phrase: action.phrase,
      };
    case ACTION_TYPES.PERSIST_LAST_SEARCH_PHRASE: {
      return {
        ...state,
        lastSearchPhrase: action.lastSearchPhrase,
      };
    }
    default:
      return state;
  }
}

export default search;
