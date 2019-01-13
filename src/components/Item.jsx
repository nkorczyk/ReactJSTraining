import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Item = (props) => {

  const { id, poster_path, overview, title, release_date } = props.movie;
  const genres = props.movie.genres.join(" & ");

  return (
    <div>
      <Link to={'/film/' + id}>
        <img src={poster_path} className="thumbnails" alt={overview} />
      </Link>
      <div className="details">
        <span className="movie-title">{title.toUpperCase()}</span>
        <span className="release-date">{release_date}</span>
      </div>
      <span className="genre">{genres}</span>
    </div>
  )
}

Item.propTypes = {
  movie: PropTypes.object
};

export default Item;
