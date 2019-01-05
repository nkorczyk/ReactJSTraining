import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Results from './Results';
import Content from './Content';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';

const SearchPage = ({ movies, searchby, sortby }) => {
  return (
    <div>
      <Header searchby={searchby} />
      <Results items={movies.length} sortby={sortby} />
      <ErrorBoundary>
        <Content movies={movies} />
      </ErrorBoundary>
      <Footer />
    </div>
  )
}

Content.propTypes = {
  movies: PropTypes.array,
  searchby: PropTypes.func,
  sortby: PropTypes.func,
};

export default SearchPage;
