import React from 'react';
import PropTypes from 'prop-types';
import MoviesList from './MoviesList';
import ErrorMessage from './ErrorMessage';
import CONSTANTS from '../constants/constants';
import { connect } from 'react-redux';

const Content = ({ movies, sortby }) => {
  const moviesFound = movies.length > 0;
  return (
    <React.Fragment>
      {moviesFound && <MoviesList movies={movies} />}
      {!moviesFound && <ErrorMessage message={CONSTANTS.NO_FILMS_FOUND} />}
    </React.Fragment>
  )
}

Content.propTypes = {
  movies: PropTypes.array,
  sortby: PropTypes.string,
};

const selectSortedMovies = (state) => {
  const sortby = state.sortby;
  const movies = state.movies.data;

  const sortbyDateOrRating = {
    DATE: "release_date",
    RATING: "vote_average"
  }[sortby];

  const dataForSort = (data) => {
    if (sortbyDateOrRating === "release_date") {
      return data.split("-").join("");
    }
    return data;
  };

  return movies.sort((a, b) => {
    return dataForSort(b[sortbyDateOrRating]) - dataForSort(a[sortbyDateOrRating]);
  });
};

const mapStateToProps = (state) => ({
  movies: selectSortedMovies(state),
  sortby: state.sortby,
});

export { Content };
export default connect(mapStateToProps)(Content);
