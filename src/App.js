import React, { Component } from 'react';
import './style.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import Wrapper from './components/Wrapper';
import Content from './components/Content';
import Footer from './components/Footer';
import movies_data from './movies_data';

class App extends Component {
  state = movies_data;
  render() {
    return (
      <div className="App">
        <Wrapper />
        <Content movies={this.state.data} />
        <Footer />
      </div>
    );
  }
}

export default App;
