// @flow
import React from 'react';
import Item from './Item';
import styled from 'styled-components';

type Props = {
  movies: []
}

const MoviesListContainer = styled.div`
  display: grid;
  grid-template-columns: 256px 256px 256px;
  grid-gap: 10px;
  background: #fff;
  margin: 0 auto;
  padding: 5px 5px;
  max-width: 800px;
`;

const MoviesList = ({ movies }: Props) => (
  <MoviesListContainer>
    {movies.map(movie => (<Item movie={movie} key={movie.id} />))}
  </MoviesListContainer>
);

export default MoviesList;
