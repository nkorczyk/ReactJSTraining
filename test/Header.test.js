import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from "../src/components/Header";

describe('should render Header component', () => {
  const element = mount(<Header />);
  it('Snapshot test with default props', () => {
    expect(element).toMatchSnapshot();
  });
});

it('should call prop method', () => {
  const spy = jest.fn();
  const instance = shallow(<Header refreshResults={spy} />).instance();
  instance.refreshResults();
  expect(spy).toHaveBeenCalled();
});
