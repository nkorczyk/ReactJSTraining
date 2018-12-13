import React from 'react';
import TestRenderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Footer from "../src/components/Footer";

it('Renders Footer component', () => {
  const tree = TestRenderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});


describe('Footer component', () => {
  const element = shallow(<Footer />);
  test('Snapshot test with default props', () => {
    expect(element).toMatchSnapshot();
  });
});
