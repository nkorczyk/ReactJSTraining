import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Results from './Results';
import Content from './Content';
import Footer from './Footer';
import MovieDetails from './MovieDetails';
import { connect } from 'react-redux';

class MoviePage extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        <MovieDetails />
        <Results items={movies.length} />
        <Content movies={movies} />
        <Footer />
      </div>
    )
  }
}

MoviePage.propTypes = {
  movies: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies.data,
  };
};

export { MoviePage };
export default connect(mapStateToProps)(MoviePage);
