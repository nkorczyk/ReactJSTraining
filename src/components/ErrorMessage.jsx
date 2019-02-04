// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  message: string,
}

const NotFoundContainer = styled.div`
  background: #fff;
  margin: 0 auto;
  max-width: 800px;
  max-height: 200px;
`;

const NotFoundMessage = styled.h3`
  padding: 80px;
  margin: 0 auto;
`;

const ErrorMessage = ({ message }: Props) => (
  <NotFoundContainer>
    <NotFoundMessage>{message}</NotFoundMessage>
  </NotFoundContainer>
);

export default ErrorMessage;
