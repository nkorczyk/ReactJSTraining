import React from 'react';

const Item = ({ movie }) => {
  const genres = movie.genres.join(" & ");

  return (
    <div>
      <img src={movie.poster_path} className="thumbnails" alt={movie.overview} />
      <div className="details">
        <span className="movie-title">{movie.title.toUpperCase()}</span>
        <span className="release-date">{movie.release_date}</span>
      </div>
      <span className="genre">{genres}</span>
    </div>
  )
}

export default Item;
