import React from 'react';
import Header from './Header';
import Results from './Results';
import Content from './Content';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';

const SearchPage = () => {
  return (
    <div>
      <Header />
      <Results />
      <ErrorBoundary>
        <Content />
      </ErrorBoundary>
      <Footer />
    </div>
  )
}

export default SearchPage;
