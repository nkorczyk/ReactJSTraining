import React from 'react';
import { mount } from 'enzyme';
import Title from '../src/components/Title';

describe('should render Title component', () => {
  const element = mount(<Title />);
  it('Snapshot test with default props', () => {
    expect(element).toMatchSnapshot();
  });
});

it('should render netflixroulette string', () => {
  const element = mount(<Title />);
  expect(element.text()).toEqual('netflixroulette');
});
