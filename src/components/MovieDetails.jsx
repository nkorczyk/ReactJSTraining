import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CONSTANTS from '../constants/constants';
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { getMovie } from '../actions/actionCreator';
import { baseURL } from '../constants/baseURL';

class MovieDetails extends Component {

  componentDidMount() {
    let url = `${baseURL}/${this.props.match.params.id}`;
    this.props.getMovie(url);
  }

  render() {
    const movie = this.props.selectedMovie ? this.props.selectedMovie : null;
    const MovieDetails = movie ? (
      <div className="movie-wrapper">
        <div className="movie-header">
          <h5 className="red-text text-darken-2">{CONSTANTS.NETFLIX}</h5>
          <Link to={'/'}>
            <button className="red lighten-1 btn right">{CONSTANTS.SEARCH}</button>
          </Link>
        </div>
        <div className="movie-poster">
          <img className="thumbnails-details" src={movie.poster_path} />
        </div>
        <div className="movie-detail">
          <h3 className="red-text text-darken-2 title-details">{movie.title}</h3>
          <h5 className="white-text text-darken-2 avg-rating">{movie.vote_average}</h5>
          <p className="white-text text-darken-2">{movie.genres.join(" & ")}</p>
          <span className="white-text text-darken-2">{movie.release_date}</span>
          <span className="white-text text-darken-2">{movie.runtime + "min"}</span>
          <p className="white-text text-darken-2 overview">{movie.overview}</p>
        </div>
      </div>
    ) : null;

    return (
      <div>{MovieDetails}</div>
    )
  }
}

MovieDetails.propTypes = {
  selectedMovie: PropTypes.object
};

const mapDispatchToProps = { getMovie };

const mapStateToProps = (state) => ({
  selectedMovie: state.movies.selectedMovie,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieDetails));
