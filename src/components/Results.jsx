// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortMovies } from '../actions/actionCreator';
import CONSTANTS from '../constants/constants';

type Props = {
  movieCount: number,
  sortMovies: Function,
}

class Results extends Component<Props> {

  handleClick = (event : SyntheticEvent<HTMLButtonElement>) => {
    this.props.sortMovies((event.target: window.HTMLButtonElement).id);
  };

  render() {
    return (
      <div className="bar grey lighten-1">
        <h6 id="moviesFound"
          className="white-text text-darken-2 grey lighten-1 filter-bar left">{this.props.movieCount + " " + CONSTANTS.MOVIES_FOUND}</h6>
        <button id="RATING" onClick={this.handleClick}
          className="white-text text-darken-2 grey lighten-1 filter-bar right button-as-text">{CONSTANTS.RATING}</button>
        <button id="DATE" onClick={this.handleClick}
          className="white-text text-darken-2 grey lighten-1 filter-bar right button-as-text">{CONSTANTS.RELEASE}</button>
        <h6 className="white-text text-darken-2 grey lighten-1 filter-bar right">{CONSTANTS.SORT}</h6>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movieCount: state.movies.data.length,
});

const mapDispatchToProps = {
  sortMovies
};

export { Results };
export default connect(mapStateToProps, mapDispatchToProps)(Results);
