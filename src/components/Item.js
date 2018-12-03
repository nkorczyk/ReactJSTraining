import React from 'react';

const Item = ({ movie }) => {
  const genres = movie.genres.map((genre, index, genres) => {
    return index !== genres.length - 1 ? (
      <span key={index}>{genre} & </span>
    ) : (
        <span key={index}>{genre}</span>
      );
  });

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
