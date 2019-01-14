import React, { Component } from 'react';
import classNames from 'classnames';
import Title from './Title';
import CONSTANTS from '../constants/constants';
import { loadMovies, searchBy, searchMovieChange } from '../actions/actionCreator';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {

  handleSearchByClick = (event) => {
    this.props.onSearch(event.target.id);
  }

  handleChange = (event) => {
    this.props.searchMovieChange(event.target.value);
  }

  render() {
    const { activeSearch } = this.props;

    const titleClass = classNames('lighten-1 btn buttons', {
      'red': activeSearch === "title",
      'grey': activeSearch === "genre",
    });

    const genreClass = classNames('lighten-1 btn buttons', {
      'red': activeSearch === "genre",
      'grey': activeSearch === "title",
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

Header.propTypes = {
  activeSearch: PropTypes.string,
  onSearch: PropTypes.func,
  // todo add loadMovies and searchMovieChange
};

Header.defaultProps = {
  onSearch: () => { },
};

const mapStateToProps = (state) => ({
  activeSearch: state.search.searchby,
});

const mapDispatchToProps = {
  loadMovies,
  searchMovieChange,
  onSearch: searchBy,
};

export { Header };
export default connect(mapStateToProps, mapDispatchToProps)(Header);
