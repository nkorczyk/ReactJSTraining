import React from 'react';
import { mount, render } from 'enzyme';
import App from "../src/App";
import configureMockStore from 'redux-mock-store';
import { Provider } from "react-redux";
import movies from '../mocks/movies';

const initialState = {
  search: {
    searchby: 'TITLE',
    phrase: ''
  },
  sortby: 'DATE',
  movies: {
    data: movies.data,
    status: 'LOAD_MOVIES_SUCCESS'
  }
};

const mockStore = configureMockStore();

describe('App', () => {
  const store = mockStore(initialState);
  it('should rendered correctly', () => {
    const component = render(
      <Provider store={store}>
        <App />
      </Provider>);
    expect(component).toMatchSnapshot();
  });
});
