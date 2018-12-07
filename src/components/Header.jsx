import React, { Component } from 'react';
import classNames from 'classnames';
import Title from './Title';
import CONSTANTS from '../constants/constants';

class Header extends Component {
  state = {
    searchBy: "title",
    searchStr: ""
  };

  handleSearchByClick = (event) => {
    this.setState({
      searchBy: event.target.id
    });
  }

  handleSearch = () => {
    this.refreshResults();
  }

  refreshResults = () => {
    const searchByTitleOrGenre = this.state.searchBy;
    const base = "http://react-cdp-api.herokuapp.com/movies";
    const url = `${base}?search=${this.state.searchStr}&searchBy=${searchByTitleOrGenre}`;
    this.props.refreshResults(url);
  }

  handleChange = (event) => {
    this.setState({
      searchStr: event.target.value
    });
  }

  handleKeyDown = (event) => {
    if (event.keyCode === 13 && event.target.value !== "") {
      this.handleSearch();
    }
  }

  render() {
    const titleClass = classNames({
      "red lighten-1 btn buttons": this.state.searchBy === "title",
      "grey lighten-1 btn buttons": this.state.searchBy === "genre"
    });

    const genreClass = classNames({
      "red lighten-1 btn buttons": this.state.searchBy === "genre",
      "grey lighten-1 btn buttons": this.state.searchBy === "title"
    });

    return (
      <header className="header">
        <Title />
        <h4 className="white-text text-darken-2">{CONSTANTS.FIND}</h4>
        <input type="text" placeholder="Enter the title" className="input-field white-text"
          onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
        <div>
          <h6 className="white-text text-darken-2 left">{CONSTANTS.SEARCH_BY}</h6>
          <button id="title" className={titleClass}
            onClick={this.handleSearchByClick}>{CONSTANTS.TITLE}</button>
          <button id="genre" className={genreClass}
            onClick={this.handleSearchByClick}>{CONSTANTS.GENRE}</button>
          <button className="red lighten-1 btn right"
            onClick={this.handleSearch}>{CONSTANTS.SEARCH}</button>
        </div>
      </header>
    )
  }
}

export default Header;
