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

export const persistLastSearchPhrase = (lastSearchPhrase) => {
  return ({
    type: ACTION_TYPES.PERSIST_LAST_SEARCH_PHRASE,
    lastSearchPhrase
  });
};

export const loadMovieDetailsSuccess = (movie) => ({
  type: ACTION_TYPES.LOAD_MOVIE_DETAILS_SUCCESS,
  movie
});

export const loadMovieSimilarGenre = (movies) => ({
  type: ACTION_TYPES.LOAD_MOVIES_SIMILAR_GENRE,
  movies
});

export const buildUrl = (searchBy, phrase) => {
  const searchByTitleOrGenre = `&searchBy=${searchBy === "title" ? "title" : "genres"}`;
  const searchPhrase = `?search=${phrase}`;
  const order = "&sortOrder=desc";
  const limit = "&limit=15";

  return `${baseURL}${searchPhrase}${searchByTitleOrGenre}${order}${limit}`;
}

export const loadMovies = () => (dispatch, getState) => {
  dispatch(loadMoviesRequest());
  const { search } = getState();
  const url = buildUrl(search.searchby, search.lastSearchPhrase);

  return axios.get(url)
    .then(response => {
      dispatch(loadMoviesSuccess(response))
    })
    .catch(error => {
      dispatch(loadMoviesError(error))
    });
};

export const getMovie = (url) => (dispatch) => {
  return axios.get(url)
    .then(movie => {
      dispatch(loadMovieDetailsSuccess(movie));
      const genre = movie.data.genres[0];
      return genre;
    })
    .then(genre => {
      const urlByGenre = buildUrl('genres', genre);
      return axios.get(urlByGenre);
    })
    .then(moviesbyGenre => {
      dispatch(loadMovieSimilarGenre(moviesbyGenre));
    });
};
