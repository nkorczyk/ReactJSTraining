import React from 'react';
import { mount } from 'enzyme';
import Footer from '../src/components/Footer';

describe('should render Footer component', () => {
  const element = mount(<Footer />);
  it('Snapshot test with default props', () => {
    expect(element).toMatchSnapshot();
  });
});

it('should render netflixroulette string', () => {
  const element = mount(<Footer />);
  expect(element.text()).toEqual('netflixroulette');
});
