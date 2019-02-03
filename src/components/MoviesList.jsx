// @flow
import React from 'react';
import Item from './Item';

type Props = {
  movies: []
}

const MoviesList = ({ movies }: Props) => (
  <div className="movies-list">
    {movies.map(movie => (<Item movie={movie} key={movie.id} />))}
  </div>
);

export default MoviesList;
