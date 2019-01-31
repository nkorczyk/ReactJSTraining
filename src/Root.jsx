import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import SearchPage from './components/SearchPage';
import MoviePage from './components/MoviePage';
import NotFoundPage from "./components/NotFoundPage";
import { Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

const Root = ({ Router, location, context, store }) => (
  <Provider store={store}>
    <Router location={location} context={context}>
      <div>
        <Switch>
          <Route exact path='/' component={SearchPage} />
          <Route path='/search/:query' component={SearchPage} />
          <Route path='/film/:id' component={MoviePage} />
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string,
  }),
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
};

Root.defaultProps = {
  location: null,
  context: null,
};

export { Root };
export default hot(module)(Root);
