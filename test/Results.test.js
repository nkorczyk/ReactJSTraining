import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { Results } from "../src/components/Results";

describe('Results', () => {
  describe('should render Results component', () => {
    const element = render(<Results items={10} />);
    it('Snapshot test with default props', () => {
      expect(element).toMatchSnapshot();
    });
  });

  describe('should display 10 movies found', () => {
    const element = mount(<Results items={10} />);
    expect(element.find('#moviesFound').text()).toEqual("10 movies found");
  });

  describe('should call prop searchBy method', () => {
    const spyHandleClick = jest.fn();
    const spySortMovies = jest.fn();
    const eventMock = {
      target: {
        value: 'test'
      }
    };

    const instance = shallow(<Results
      handleClick={spyHandleClick}
      sortMovies={spySortMovies} />).instance();
    instance.handleClick(eventMock);
    expect(spySortMovies).toHaveBeenCalled();
  });
});
