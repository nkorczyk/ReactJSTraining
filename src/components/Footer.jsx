import React from 'react';
import CONSTANTS from '../constants/constants';
import styled from 'styled-components';

const BarFooter = styled.footer`
  margin: 0 auto;
  max-width: 800px;
  overflow: auto;
`;

const GreyBar = styled.h5`
  max-width: 800px;
  margin: 0 auto;
  padding: 15px 15px;
`;

const Footer = () => {
  return (
    <BarFooter>
      <GreyBar className="red-text text-darken-2 grey darken-3">{CONSTANTS.NETFLIX}</GreyBar>
    </BarFooter>
  )
}

export default Footer;
