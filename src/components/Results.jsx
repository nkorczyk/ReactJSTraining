import React from 'react';
import CONSTANTS from '../constants/constants';

const Results = () => {
  return (
    <div className="bar grey lighten-1">
      <h6 className="white-text text-darken-2 grey lighten-1 filter-bar left">{CONSTANTS.MOVIES_FOUND}</h6>
      <h6 className="white-text text-darken-2 grey lighten-1 filter-bar right">{CONSTANTS.RATING}</h6>
      <h6 className="white-text text-darken-2 grey lighten-1 filter-bar right">{CONSTANTS.RELEASE}</h6>
      <h6 className="white-text text-darken-2 grey lighten-1 filter-bar right">{CONSTANTS.SORT}</h6>
    </div>
  )
}

export default Results;
