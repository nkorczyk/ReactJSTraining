// @flow
import React, { Component } from 'react';
import CONSTANTS from '../constants/constants';
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { getMovie } from '../actions/actionCreator';
import styled from 'styled-components';

type Props = {
  selectedMovie: Object,
  getMovie: Function,
  match: {
    params: {
      id: string
    }
  },
}

const MovieHeader = styled.div`
  padding: 5px 5px;
  & > h5 {
    display: inline;
  }
`;

const MoviePoster = styled.div`
  display: inline-block;
`;

const Poster = styled.img`
  display: block;
  width: 170px;
`;

const MovieDetail = styled.div`
  float: right;
  margin: 0 auto;
  width: 500px;

  & > h3 {
    text-align: left;
    margin: 0px;
  }

  & > span {
    padding-right: 5px;
  }
`;

const TitleDetails = styled.h3`
  display: inline;
`;

const AverageRating = styled.h5`
  display: inline;
  border: 1px solid white;
  border-radius: 30px;
  padding: 3px 7px;
  margin-left: 5px;
`;

const Overview = styled.p`
  font-size: 11px;
`;

class MovieDetails extends Component<Props> {

  static fetchData(dispatch: Function, match: Object) {
    return dispatch(getMovie(match.params.id));
  }

  componentWillMount() {
    this.props.getMovie(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.getMovie(this.props.match.params.id);
    }
  }

  render() {
    const movie = this.props.selectedMovie ? this.props.selectedMovie : null;
    const MovieDetails = movie ? (
      <div className="movie-wrapper">
        <MovieHeader>
          <h5 className="red-text text-darken-2">{CONSTANTS.NETFLIX}</h5>
          <Link to={'/'}>
            <button className="red lighten-1 btn right">{CONSTANTS.SEARCH}</button>
          </Link>
        </MovieHeader>
        <MoviePoster>
          <Poster src={movie.poster_path} />
        </MoviePoster>
        <MovieDetail>
          <TitleDetails className="red-text text-darken-2">{movie.title}</TitleDetails>
          <AverageRating className="white-text text-darken-2">{movie.vote_average}</AverageRating>
          <p className="white-text text-darken-2">{movie.genres.join(" & ")}</p>
          <span className="white-text text-darken-2">{movie.release_date}</span>
          <span className="white-text text-darken-2">{movie.runtime + "min"}</span>
          <Overview className="white-text text-darken-2 overview">{movie.overview}</Overview>
        </MovieDetail>
      </div>
    ) : null;

    return (
      <div>{MovieDetails}</div>
    )
  }
}

const mapDispatchToProps = { getMovie };

const mapStateToProps = (state) => ({
  selectedMovie: state.movies.selectedMovie,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieDetails));
