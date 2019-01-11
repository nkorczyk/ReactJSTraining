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

it('should call prop searchMovieChange method', () => {
  const spyHandleChange = jest.fn();
  const spySearchMovieChange = jest.fn();
  const eventMock = {
    target: {
      value: 'test'
    }
  };

  const instance = shallow(<Header
    handleChange={spyHandleChange}
    searchMovieChange={spySearchMovieChange} />).instance();
  instance.handleChange(eventMock);
  expect(spySearchMovieChange).toHaveBeenCalled();
});

it('should call prop searchBy method', () => {
  const spyhandleSearchByClick = jest.fn();
  const spySearchBy = jest.fn();
  const eventMock = {
    target: {
      value: 'test'
    }
  };

  const instance = shallow(<Header
    handleSearchByClick={spyhandleSearchByClick}
    searchBy={spySearchBy} />).instance();
  instance.handleSearchByClick(eventMock);
  expect(spySearchBy).toHaveBeenCalled();
});
