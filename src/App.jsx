import React, { Component } from 'react';
import './style.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './components/Header';
import Results from './components/Results';
import Content from './components/Content';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import axios from 'axios';

class App extends Component {
  state = {
    data: [],
  };

  refreshResults = (searchStr) => {
    console.log(searchStr);
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
        <Header refreshResults={this.refreshResults} />
        <Results />
        <ErrorBoundary>
          <Content movies={this.state.data} />
        </ErrorBoundary>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
