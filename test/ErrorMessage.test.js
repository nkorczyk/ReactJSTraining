import React from 'react';
import { mount } from 'enzyme';
import ErrorMessage from "../src/components/ErrorMessage";

describe('should render ErrorMessage component', () => {
  const element = mount(<ErrorMessage message="Test message" />);
  test('Snapshot test with default props', () => {
    expect(element).toMatchSnapshot();
  });
});

test('should render error message', () => {
  const element = mount(<ErrorMessage message="Test message" />);
  expect(element.text()).toEqual('Test message');
});
