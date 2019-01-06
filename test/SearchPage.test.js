import React from 'react';
import { shallow } from 'enzyme';
import SearchPage from "../src/components/SearchPage";
import movies from '../mocks/movies';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

describe('should render SearchPage component', () => {
  const store = mockStore({});
  const mockedMovies = movies.data.splice(0, 5);
  const component = shallow(<SearchPage movies={mockedMovies} store={store} />);
  it('Snapshot test with default props', () => {
    expect(component).toMatchSnapshot();
  });
});
