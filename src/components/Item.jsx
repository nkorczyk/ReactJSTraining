// @flow
import React from 'react';
import { Link } from "react-router-dom";

type Props = {
    movie: {
      id: string,
      poster_path: string,
      release_date: string,
      overview: string,
      title: string,
      genres: Array<string>,
    }
}

const Item = (props: Props) => {

  const { id, poster_path, overview, title, release_date } = props.movie;
  const genres = props.movie.genres.join(" & ");

  return (
    <div>
      <Link to={`/film/${id}`}>
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

export default Item;
