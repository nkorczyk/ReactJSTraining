import React from 'react';
import Item from './Item';

const Content = ({ movies }) => {
  const movieslength = movies.length ? (
    movies.map(movie => {
      return (
        <Item movie={movie} key={movie.id} />
      );
    })
  ) : (
      <div className="no-found">
        <h3 className="content-list">No Films found</h3>
      </div>
    );

  return (
    <div className="list">
      {movieslength}
    </div>
  )
}

export default Content;
