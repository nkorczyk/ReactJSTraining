import React, { Component } from 'react';
import './style.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { loadMovies } from './actions/actionCreator';
import { connect } from 'react-redux';
import SearchPage from './components/SearchPage';
import MoviePage from './components/MoviePage';

class App extends Component {

  componentDidMount() {
    this.props.loadMovies();
  };

  render() {
    return (
      <React.Fragment>
        <SearchPage
          movies={this.props.movies}
          searchby={this.props.searchby}
          sortby={this.props.sortby} />
        {/* <MoviePage movies={this.state.data}/> */}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = { loadMovies };

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
