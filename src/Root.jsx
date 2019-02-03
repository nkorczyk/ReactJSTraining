// @flow
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import SearchPage from './components/SearchPage';
import MoviePage from './components/MoviePage';
import NotFoundPage from "./components/NotFoundPage";
import { Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

type Props = {
  Router: Function,
  location: string,
  context: Object,
  store: Object,
}

const Root = ({ Router, location, context, store }: Props) => (
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

Root.defaultProps = {
  location: null,
  context: null,
};

export { Root };
export default hot(module)(Root);
