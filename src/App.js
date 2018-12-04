import React, { Component } from 'react';
import './style.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './components/Header';
import Results from './components/Results';
import Content from './components/Content';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import movies_data from './movies_data';

class App extends Component {
  state = movies_data;
  render() {
    return (
      <React.Fragment>
        <Header />
        <Results />
        <ErrorBoundary>
          <Content movies={this.state.data} />
        </ErrorBoundary>,
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
