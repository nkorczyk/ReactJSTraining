import React, { Component } from 'react';
import CONSTANTS from '../constants/constants';
import styled from 'styled-components';

const MessageError = styled.div`
  width: 100%;
  border: 1px solid;
  padding: 10px;
  margin: 20px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  max-width: 200px;
  max-height: 70px;
  overflow: auto;
  text-align: center;
  border-color: #d32f2f;
  background-color: #ef5350;
  color: white;
`;

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <MessageError className="z-depth-3">{CONSTANTS.ERROR}</MessageError>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
