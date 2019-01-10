import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sortMovies } from '../actions/actionCreator';
import CONSTANTS from '../constants/constants';

class Results extends Component {

  handleClick = (event) => {
    this.props.sortMovies(event.target.id);
  };

  render() {
    return (
      <div className="bar grey lighten-1">
        <h6 id="moviesFound"
          className="white-text text-darken-2 grey lighten-1 filter-bar left">{this.props.items + " " + CONSTANTS.MOVIES_FOUND}</h6>
        <button id="RATING" onClick={this.handleClick}
          className="white-text text-darken-2 grey lighten-1 filter-bar right button-as-text">{CONSTANTS.RATING}</button>
        <button id="DATE" onClick={this.handleClick}
          className="white-text text-darken-2 grey lighten-1 filter-bar right button-as-text">{CONSTANTS.RELEASE}</button>
        <h6 className="white-text text-darken-2 grey lighten-1 filter-bar right">{CONSTANTS.SORT}</h6>
      </div>
    )
  }
}

Results.propTypes = {
  items: PropTypes.number,
  sorty: PropTypes.string,
  sortMovies: PropTypes.func
};

const mapDispatchToProps = {
  sortMovies
};

export { Results };
export default connect(null, mapDispatchToProps)(Results);
