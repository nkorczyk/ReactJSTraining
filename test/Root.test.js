import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Root from '../src/Root';
import movies from '../mocks/movies';

const initialState = {
  search: {
    searchby: 'TITLE',
    phrase: '',
  },
  sortby: 'DATE',
  movies: {
    data: movies.data,
    status: 'LOAD_MOVIES_SUCCESS',
  },
};

const mockStore = configureMockStore();
const mockRouter = jest.fn();

describe('Root', () => {
  const store = mockStore(initialState);
  it('should rendered correctly', () => {
    const component = shallow(
      <Root
        store={store}
        Router={mockRouter} />,
    );
    expect(component).toMatchSnapshot();
  });
});
