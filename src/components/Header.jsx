import React from 'react';
import Title from './Title';
import CONSTANTS from '../constants/constants';

const Header = () => {
  return (
    <div className="header">
      <Title />
      <h4 className="white-text text-darken-2">{CONSTANTS.FIND}</h4>
      <input type="text" placeholder="Enter the title" className="input-field white-text"></input>
      <div>
        <h6 className="white-text text-darken-2 left">{CONSTANTS.SEARCH_BY}</h6>
        <button className="red lighten-1 btn buttons">{CONSTANTS.TITLE}</button>
        <button className="grey darken-2 btn buttons">{CONSTANTS.GENRE}</button>
        <button className="red lighten-1 btn right">{CONSTANTS.SEARCH}</button>
      </div>
    </div>
  )
}

export default Header;
