import React, { Component } from 'react';
import classNames from 'classnames';
import Title from './Title';
import CONSTANTS from '../constants/constants';
import { loadMovies, searchBy, searchMovieChange, persistLastSearchPhrase } from '../actions/actionCreator';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class Header extends Component {

  handleSearchByClick = (event) => {
    this.props.onSearch(event.target.id);
  }

  handleSearch = () => {
    console.log("this.propsdsad",this.props.phrase);
    this.props.persistLastSearchPhrase(this.props.phrase);
    this.props.loadMovies();
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
          <Link to={'/search/Search ' + this.props.phrase}>
            <button id="search" className="red lighten-1 btn right"
              onClick={this.handleSearch}>{CONSTANTS.SEARCH}</button>
          </Link>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  activeSearch: PropTypes.string,
  onSearch: PropTypes.func,
  loadMovies: PropTypes.func,
  searchMovieChange: PropTypes.func,
};

Header.defaultProps = {
  onSearch: () => { },
};

const mapStateToProps = (state) => ({
  activeSearch: state.search.searchby,
  phrase: state.search.phrase,
});

const mapDispatchToProps = {
  loadMovies,
  searchMovieChange,
  persistLastSearchPhrase,
  onSearch: searchBy,
};

export { Header };
export default connect(mapStateToProps, mapDispatchToProps)(Header);
