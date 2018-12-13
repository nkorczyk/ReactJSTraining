import React from 'react';
import TestRenderer from 'react-test-renderer';
import { mount } from 'enzyme';
import App from "../src/App";

describe('should render Footer component', () => {
  const element = mount(<Results items={10} />);
  test('Snapshot test with default props', () => {
    expect(element).toMatchSnapshot();
  });
});

describe('App Snapshot', () => {
  test('renders', () => {
    const component = TestRenderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
