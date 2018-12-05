import React, { Component } from 'react';
import './style.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import SearchPage from './components/SearchPage';
import MoviePage from './components/MoviePage';
import axios from 'axios';

class App extends Component {
  state = {
    data: [],
  };

  refreshResults = (searchStr) => {
    axios.get(searchStr)
      .then(response => {
        this.setState({
          data: response.data.data
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <SearchPage movies={this.state.data} refreshResults={this.refreshResults} />
        {/* <MoviePage movies={this.state.data}/> */}
      </React.Fragment>
    );
  }
}

export default App;
