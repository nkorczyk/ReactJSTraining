import React from 'react';
import { shallow } from 'enzyme';
import ErrorMessage from "../src/components/ErrorMessage";

describe('should render ErrorMessage component', () => {
  const element = shallow(<ErrorMessage message="Test message" />);
  it('Snapshot test with default props', () => {
    expect(element).toMatchSnapshot();
  });
});

it('should render error message', () => {
  const element = shallow(<ErrorMessage message="Test message" />);
  expect(element.text()).toEqual('Test message');
});
