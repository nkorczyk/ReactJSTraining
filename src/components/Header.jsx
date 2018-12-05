import React, { Component } from 'react';
import Title from './Title';
import CONSTANTS from '../constants/constants';

class Header extends Component {
  state = {
    titleActive: true,
    searchStr: ""
  };

  handleSearchByClick = (event) => {
    this.setState({
      titleActive: event.target.id === "title" ? true : false
    });
  }

  handleSearch = (event) => {
    this.refreshResults();
  }

  refreshResults = () => {
    const searchByTitleOrGenre = this.state.titleActive === true ? "title" : "genres";
    const base = "http://react-cdp-api.herokuapp.com/movies";
    const url = `${base}?search=${this.state.searchStr}&searchBy=${searchByTitleOrGenre}`;
    this.props.refreshResults(url);
  }

  handleChange = (event) => {
    this.setState({
      searchStr: event.target.value
    });
  }

  handleKeyPress = (event) => {
    if (event.keyCode === 13 && event.target.value !== "") {
      this.handleSearch();
    }
  }

  render() {
    return (
      <div className="header">
        <Title />
        <h4 className="white-text text-darken-2">{CONSTANTS.FIND}</h4>
        <input type="text" placeholder="Enter the title" className="input-field white-text"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyPress} />
        <div>
          <h6 className="white-text text-darken-2 left">{CONSTANTS.SEARCH_BY}</h6>
          <button id="title" className={(this.state.titleActive ? "red" : "grey") + " lighten-1 btn buttons"}
            onClick={this.handleSearchByClick}>{CONSTANTS.TITLE}</button>
          <button id="genre" className={(this.state.titleActive ? "grey" : "red") + " lighten-1 btn buttons"}
            onClick={this.handleSearchByClick}>{CONSTANTS.GENRE}</button>
          <button className="red lighten-1 btn right"
            onClick={this.handleSearch}>{CONSTANTS.SEARCH}</button>
        </div>
      </div>
    )
  }
}

export default Header;
