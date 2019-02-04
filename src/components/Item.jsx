// @flow
import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

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

const Thumbnails = styled.img`
  display: block;
  width: 256px;
  cursor: pointer;
`;

const MovieTitle = styled.span`
  float: left;
  font-size: 10px;
  font-weight: bold;
  padding: 2px 2px;
`;

const ReleaseDate = styled.span`
  float: right;
  font-size: 10px;
  padding: 0px 1px;
  margin-top: 1px;
  border: 1px solid #000;
`;

const Genre = styled.span`
  font-size: 10px;
`;

const Item = (props: Props) => {

  const { id, poster_path, overview, title, release_date } = props.movie;
  const genres = props.movie.genres.join(" & ");

  return (
    <div>
      <Link to={`/film/${id}`}>
        <Thumbnails src={poster_path} alt={overview} />
      </Link>
      <div className="details">
        <MovieTitle>{title.toUpperCase()}</MovieTitle>
        <ReleaseDate>{release_date}</ReleaseDate>
      </div>
      <Genre>{genres}</Genre>
    </div>
  )
}

export default Item;
