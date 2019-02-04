import { createSelector } from 'reselect';

const moviesSelector = state => state.movies.data;
const selectedMovieSelector = state => state.movies.selectedMovie && state.movies.selectedMovie.id;

const getSelectedMovie = (moviesSelector, selectedMovieSelector) => {
   return moviesSelector.filter(movie => movie.id === selectedMovieSelector);;
};

export default createSelector(
  moviesSelector,
  selectedMovieSelector,
  getSelectedMovie
);
