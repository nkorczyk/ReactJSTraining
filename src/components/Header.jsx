// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import Title from './Title';
import CONSTANTS from '../constants/constants';
import { loadMovies, searchBy, searchMovieChange, persistLastSearchPhrase } from '../actions/actionCreator';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

type Props = {
  activeSearch: string,
  phrase: string,
  onSearch: Function,
  loadMovies: Function,
  searchMovieChange: Function,
  persistLastSearchPhrase: Function,
}

class Header extends Component<Props> {
  static defaultProps = {
    onSearch: () => { },
  }

  handleSearchByClick = (event : SyntheticEvent<HTMLButtonElement>) => {
    this.props.onSearch((event.target: window.HTMLButtonElement).id);
  }

  handleSearch = () => {
    this.props.persistLastSearchPhrase(this.props.phrase);
    this.props.loadMovies();
  }

  handleChange = (event : SyntheticEvent<HTMLButtonElement>) => {
    this.props.searchMovieChange((event.target: window.HTMLButtonElement).value);
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
          <Link to={`/search/${encodeURIComponent(this.props.phrase)}`}>
            <button id="search" className="red lighten-1 btn right"
              onClick={this.handleSearch}>{CONSTANTS.SEARCH}</button>
          </Link>
        </div>
      </header>
    )
  }
}

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
