import React, { Component } from 'react';
import classNames from 'classnames';
import Title from './Title';
import CONSTANTS from '../constants/constants';
import { loadMovies, searchBy, searchMovieChange } from '../actions/actionCreator';
import { connect } from 'react-redux';

class Header extends Component {

  handleSearchByClick = (event) => {
    this.props.searchBy(event.target.id);
  }

  handleChange = (event) => {
    this.props.searchMovieChange(event.target.value);
  }

  render() {
    const { searchby } = this.props;

    const titleClass = classNames('lighten-1 btn buttons', {
      'red': searchby === "title",
      'grey': searchby === "genre",
    });

    const genreClass = classNames('lighten-1 btn buttons', {
      'red': searchby === "genre",
      'grey': searchby === "title",
    });

    return (
      <header className="header">
        <Title />
        <h4 className="white-text text-darken-2">{CONSTANTS.FIND}</h4>
        <input type="text" placeholder="Enter the title" className="input-field white-text"
          onChange={this.handleChange} />
        <div>
          <h6 className="white-text text-darken-2 left">{CONSTANTS.SEARCH_BY}</h6>
          <button id="title" className={titleClass}
            onClick={this.handleSearchByClick}>{CONSTANTS.TITLE}</button>
          <button id="genre" className={genreClass}
            onClick={this.handleSearchByClick}>{CONSTANTS.GENRE}</button>
          <button id="search" className="red lighten-1 btn right"
            onClick={this.props.loadMovies}>{CONSTANTS.SEARCH}</button>
        </div>
      </header>
    )
  }
}

const mapDispatchToProps = {
  loadMovies,
  searchMovieChange,
  searchBy,
};

export { Header };
export default connect(null, mapDispatchToProps)(Header);
