// @flow
import * as React from 'react';
import MoviesList from './MoviesList';
import ErrorMessage from './ErrorMessage';
import CONSTANTS from '../constants/constants';
import { connect } from 'react-redux';
import { searchMovies } from '../actions/actionCreator';

type Props = {
  movies: [],
  sortby: string,
  searchMovies: Function,
  match: {
    params: {
      query: string
    }
  },
}

class Content extends React.Component<Props> {

  static fetchData(dispatch: Function, match: Object) {
    return dispatch(searchMovies(match.params.query));
  }

  componentDidMount() {
    if (this.props.match) {
      this.props.searchMovies(this.props.match.params.query);
    }
  }
  render() {
    const { movies } = this.props;
    const moviesFound = movies.length > 0;
    return (
      <React.Fragment>
        {moviesFound && <MoviesList movies={movies} />}
        {!moviesFound && <ErrorMessage message={CONSTANTS.NO_FILMS_FOUND} />}
      </React.Fragment>
    )
  }
}

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

const mapDispatchToProps = { searchMovies };

const mapStateToProps = (state) => ({
  movies: state.movies.data,
  sortby: state.sortby,
});

export { Content };
export default connect(mapStateToProps, mapDispatchToProps)(Content);
