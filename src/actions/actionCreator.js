import axios from 'axios';
import ACTION_TYPES from '../actions/types';

export const searchBy = (searchby) => ({
  type: ACTION_TYPES.SEARCH_BY,
  searchby
});

export const sortMovies = (sortby) => ({
  type: ACTION_TYPES.SORT_MOVIES,
  sortby
});

export const searchMovieChange = (phrase) => ({
  type: ACTION_TYPES.SEARCH_MOVIE_CHANGE,
  phrase
});

export const loadMoviesSuccess = (response) => {
  const movies = response.data.data;
  return ({
    type: ACTION_TYPES.LOAD_MOVIES_SUCCESS,
    movies
  });
};

export const loadMoviesError = (error) => ({
  type: ACTION_TYPES.LOAD_MOVIES_ERROR,
  error
});

export const loadMoviesRequest = () => ({
  type: ACTION_TYPES.LOAD_MOVIES
});

export const buildUrl = (getState) => {
  const state = getState();
  const url = "http://react-cdp-api.herokuapp.com/movies";
  const searchBy = `&searchBy=${state.search.searchby === "title" ? "title" : "genres"}`;
  const phrase = `?search=${state.search.phrase}`;
  const order = "&sortOrder=desc";
  const limit = "&limit=15";

  return `${url}${phrase}${searchBy}${order}${limit}`;
}

export const loadMovies = () => (dispatch, getState) => {
  dispatch(loadMoviesRequest());
  const url = buildUrl(getState);

  return axios.get(url)
    .then(response => {
      dispatch(loadMoviesSuccess(response))
    })
    .catch(error => {
      dispatch(loadMoviesError(error))
    });
};
