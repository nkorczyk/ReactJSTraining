import React from 'react';
import Item from './Item';
import CONSTANTS from '../constants/constants';

const Content = ({ movies }) => {
  const moviesLength = movies.length;
  const moviesList = moviesLength ? (
    movies.map(movie => {
      return (
        <Item movie={movie} key={movie.id} />
      );
    })
  ) : (
      <div className="not-found">
        <h3 className="not-found-message">{CONSTANTS.NO_FILMS_FOUND}</h3>
      </div>
    );

  return (
    <div className={moviesLength ? "movies-list" : ""}>
      {moviesList}
    </div>
  )
}

export default Content;
