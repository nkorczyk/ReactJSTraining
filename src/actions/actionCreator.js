import axios from 'axios';
import ACTION_TYPES from '../actions/types';
import { baseURL } from '../constants/baseURL';

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

export const selectMovie = (movie) => ({
  type: ACTION_TYPES.SELECT_MOVIE,
  movie
});

export const clearStore = () => ({
  type: ACTION_TYPES.CLEAR_STORE,
});

export const persistLastSearchPhrase = (lastSearchPhrase) => {
  return ({
    type: ACTION_TYPES.PERSIST_LAST_SEARCH_PHRASE,
    lastSearchPhrase
  });
};

export const LoadMovieDetailsSuccess = (movie) => ({
  type: ACTION_TYPES.LOAD_MOVIE_DETAILS_SUCCESS,
  movie
});

export const buildUrl = (getState) => {
  const state = getState();
  const url = baseURL;
  const searchBy = `&searchBy=${state.search.searchby === "title" ? "title" : "genres"}`;
  const phrase = `?search=${state.search.lastSearchPhrase}`;
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

export const getMovie = (url) => (dispatch, getState) => {
  return axios.get(url)
    .then(movie => {
      dispatch(LoadMovieDetailsSuccess(movie));
      const genre = movie.data.genres[0];
    })
};
