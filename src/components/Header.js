import React from 'react';
import Title from './Title';

const Header = () => {
  return (
    <div className="wrapper">
      <Title />
      <h4 className="white-text text-darken-2">FIND YOUR MOVIE</h4>
      <input type="text" placeholder="Enter the title" className="input-field white-text bcg"></input>
      <div>
        <h6 className="white-text text-darken-2 left">SEARCH BY</h6>
        <button className="red lighten-1 btn button1">TITLE</button>
        <button className="grey darken-2 btn button1">GENRE</button>
        <button className="red lighten-1 btn right">SEARCH</button>
      </div>

    </div>
  )
}

export default Header;
