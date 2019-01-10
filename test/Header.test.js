import React from 'react';
import { shallow, mount } from 'enzyme';
import { Header } from "../src/components/Header";

describe('Header', () => {
  it('should render Header component', () => {
    const component = mount(
      <Header searchby={'TITLE'}
        handleSearchByClick={jest.fn()} />);
    expect(component).toMatchSnapshot();
  });
});

it('should call prop method', () => {
  const spy = jest.fn();
  const eventMock = {
    target: {
      value: 'test'
    }
  };

  const instance = shallow(<Header handleChange={spy} searchMovieChange={spy} />).instance();
  instance.handleChange(eventMock);
  expect(spy).toHaveBeenCalled();
});
