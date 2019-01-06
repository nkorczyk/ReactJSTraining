import React from 'react';
import { mount, render } from 'enzyme';
import Results from "../src/components/Results";
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

describe('Results', () => {
  const store = mockStore({});
  describe('should render Results component', () => {
    const element = render(<Results items={10} store={store} />);
    it('Snapshot test with default props', () => {
      expect(element).toMatchSnapshot();
    });
  });

  describe('should display 10 movies found', () => {
    const element = mount(<Results items={10} store={store} />);
    expect(element.find('#moviesFound').text()).toEqual("10 movies found");
  });
});
