import React, { Component } from 'react';
import './style.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { loadMovies } from './actions/actionCreator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchPage from './components/SearchPage';
import MoviePage from './components/MoviePage';

class App extends Component {

  async componentDidMount() {
    await this.props.loadMovies();
  };

  moviesSorted = (movies, sortby) => {
    const sortbyDateOrRating = {
      'DATE': 'release_date',
      'RATING': 'vote_average'
    }[sortby];

    const dataForSort = (data) => {
      if (sortbyDateOrRating === 'release_date') {
        return data.split('-').join('');
      } else {
        return data;
      }
    };

    return movies.sort((a, b) => {
      return dataForSort(b[sortbyDateOrRating]) - dataForSort(a[sortbyDateOrRating]);
    });
  };

  render() {
    return (
      <React.Fragment>
        <SearchPage movies={this.moviesSorted(this.props.movies, this.props.sortby)}
          searchby={this.props.searchby}
          sortby={this.props.sortby} />
        {/* <MoviePage movies={this.state.data}/> */}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadMovies
  }, dispatch);
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.data,
    searchby: state.search.searchby,
    sortby: state.sortby
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
