import React from 'react';
import { mount } from 'enzyme';
import Footer from "../src/components/Footer";

describe('should render Footer component', () => {
  const element = mount(<Footer />);
  test('Snapshot test with default props', () => {
    expect(element).toMatchSnapshot();
  });
});

test('should render netflixroulette string', () => {
  const element = mount(<Footer />);
  expect(element.text()).toEqual('netflixroulette');
});
