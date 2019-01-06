import React from 'react';
import { mount } from 'enzyme';
import Header from "../src/components/Header";
import configureMockStore from 'redux-mock-store';

const initialState = {
  search: {
    searchby: 'TITLE',
    phrase: ''
  }
};

const mockStore = configureMockStore();

describe('Header', () => {
  const store = mockStore(initialState);
  it('should render Header component', () => {
    const component = mount(
      <Header searchby={'TITLE'}
        handleSearchByClick={jest.fn()}
        store={store} />);
    expect(component).toMatchSnapshot();
  });
});
