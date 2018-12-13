import React from 'react';
import { mount } from 'enzyme';
import Header from "../src/components/Header";

describe('should render Header component', () => {
  const element = mount(<Header />);
  test('Snapshot test with default props', () => {
    expect(element).toMatchSnapshot();
  });
});
