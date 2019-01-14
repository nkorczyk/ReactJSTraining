import React, { Component } from 'react';
import './style.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { clearStore, loadMovies, selectMovie } from './actions/actionCreator';
import { connect } from 'react-redux';
import SearchPage from './components/SearchPage';
import MoviePage from './components/MoviePage';
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// todo add update propTypes
//const propTypes = {
  // selectMovie: ...,
//};

class App extends Component {

  componentDidMount() {
    this.props.clearStore();
  };

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path='/' component={SearchPage} />
              <Route path='/film/:id' component={MoviePage} />
              <Route path='/*' component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = { clearStore, loadMovies, selectMovie };

export default connect(null, mapDispatchToProps)(App);
