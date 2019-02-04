import React from 'react';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  margin: 160px;
  text-align: center;
`;

const NotFoundPage = () => (
  <NotFoundContainer>
    <h1>404 - Page Not Found</h1>
  </NotFoundContainer>
);

export default NotFoundPage;
