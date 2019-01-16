import React, { Component } from 'react';
import './style.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import SearchPage from './components/SearchPage';
import MoviePage from './components/MoviePage';
import NotFoundPage from "./components/NotFoundPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path='/' component={SearchPage} />
              <Route path='/search/:query' component={SearchPage} />
              <Route path='/film/:id' component={MoviePage} />
              <Route path='*' component={NotFoundPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
