import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Results from './Results';
import Content from './Content';
import Footer from './Footer';
import MovieDetails from './MovieDetails';
import { connect } from 'react-redux';

class SearchPage extends Component {
  render() {
    const { movieDetails, movies } = this.props;
    return (
      <div>
        <MovieDetails movie={movieDetails} />
        <Results items={movies.length} />
        <Content movies={movies} />
        <Footer />
      </div>
    )
  }
}

SearchPage.propTypes = {
  movies: PropTypes.array,
  movieDetails: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    movieDetails: state.movies.selectedMovie,
    movies: state.movies.data,
    sortby: state.sortby
  };
};

export { SearchPage };
export default connect(mapStateToProps, null)(SearchPage);
