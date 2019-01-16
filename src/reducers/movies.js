import initialState from './initialState';
import ACTION_TYPES from '../actions/types';

function movies(state = initialState.movies, action) {
  switch (action.type) {
    case ACTION_TYPES.LOAD_MOVIES:
      return {
        ...state,
        status: ACTION_TYPES.LOAD_MOVIES
      };
    case ACTION_TYPES.LOAD_MOVIES_SUCCESS:
      return {
        ...state,
        data: action.movies,
        status: ACTION_TYPES.LOAD_MOVIES_SUCCESS
      };
    case ACTION_TYPES.LOAD_MOVIES_ERROR:
      return {
        data: [],
        status: ACTION_TYPES.LOAD_MOVIES_ERROR
      };
    case ACTION_TYPES.SELECT_MOVIE:
      return {
        ...state,
        selectedMovie: action.movie
      };
    case ACTION_TYPES.LOAD_MOVIE_DETAILS_SUCCESS:
    console.log("action.movie.data", action.movie)
      return {
        ...state,
        selectedMovie: action.movie.data
      };
    case ACTION_TYPES.LOAD_MOVIES_SIMILAR_GENRE:
      return {
        ...state,
        data: action.movies.data.data
      };
    default:
      return state;
  }
}

export default movies;
