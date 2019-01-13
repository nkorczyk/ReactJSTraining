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

class App extends Component {

  componentDidMount() {
    this.props.clearStore();
  };

  getSelectedMovie = (movies, selectedId) => {
    return movies.filter(movie => {
      return movie.id === Number(selectedId);
    })[0];
  };

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path='/' render={() => {
                return (
                  <div>
                    <SearchPage
                      movies={this.props.movies}
                      searchby={this.props.searchby}
                      sortby={this.props.sortby} />
                  </div>
                )
              }} />
              <Route path='/film/:id' render={(props) => {
                const selectedMovie = this.getSelectedMovie(this.props.movies, props.match.params.id);
                this.props.selectMovie(selectedMovie);
                return (
                  <MoviePage />
                )
              }} />
              <Route path='/*' component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = { clearStore, loadMovies, selectMovie };

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

const mapStateToProps = (state) => {
  return {
    movies: selectSortedMovies(state),
    searchby: state.search.searchby,
    sortby: state.sortby
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
