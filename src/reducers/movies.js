import initialState from './initialState';
import ACTION_TYPES from '../actions/types';

function sortby(state = initialState.movies, action) {
  switch (action.type) {
    case ACTION_TYPES.LOAD_MOVIES:
      state = {
        ...state,
        status: ACTION_TYPES.LOAD_MOVIES
      };
      return state;
    case ACTION_TYPES.LOAD_MOVIES_SUCCESS:
      state = {
        ...state,
        data: action.movies,
        status: ACTION_TYPES.LOAD_MOVIES_SUCCESS
      };
      return state;
    case ACTION_TYPES.LOAD_MOVIES_ERROR:
      state = {
        data: [],
        status: ACTION_TYPES.LOAD_MOVIES_ERROR
      };
      return state;
    default:
      return state;
  }
}

export default sortby;
