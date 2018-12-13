import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import { mount } from 'enzyme';
import App from "../src/App";

it('should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App Snapshot', () => {
  test('renders', () => {
    const component = TestRenderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('should render App component', () => {
  const element = mount(<App />);
  test('Snapshot test with default props', () => {
    expect(element).toMatchSnapshot();
  });
});
