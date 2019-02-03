// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortMovies } from '../actions/actionCreator';
import CONSTANTS from '../constants/constants';
import styled from 'styled-components';

type Props = {
  movieCount: number,
  sortMovies: Function,
}

const ResultContainer = styled.div`
  margin: 0 auto;
  max-width: 800px;
  overflow: auto;
  &:after {
    display: block;
    content: "";
    clear: both;
  }
`;

const Button = styled.button`
  background:none;
  border:none;
  cursor: pointer;
`;

class Results extends Component<Props> {

  handleClick = (event : SyntheticEvent<HTMLButtonElement>) => {
    this.props.sortMovies((event.target: window.HTMLButtonElement).id);
  };

  render() {
    return (
      <ResultContainer className="grey lighten-1">
        <h6 id="moviesFound"
          className="white-text text-darken-2 grey lighten-1 filter-bar left">{this.props.movieCount + " " + CONSTANTS.MOVIES_FOUND}</h6>
        <Button id="RATING" onClick={this.handleClick}
          className="white-text text-darken-2 grey lighten-1 filter-bar right">{CONSTANTS.RATING}</Button>
        <Button id="DATE" onClick={this.handleClick}
          className="white-text text-darken-2 grey lighten-1 filter-bar right">{CONSTANTS.RELEASE}</Button>
        <h6 className="white-text text-darken-2 grey lighten-1 filter-bar right">{CONSTANTS.SORT}</h6>
      </ResultContainer>
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
