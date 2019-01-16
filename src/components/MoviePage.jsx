import React, { Component } from 'react';
import Results from './Results';
import Content from './Content';
import Footer from './Footer';
import MovieDetails from './MovieDetails';

class MoviePage extends Component {
  render() {
    return (
      <div>
        <MovieDetails />
        <Results />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default MoviePage;
