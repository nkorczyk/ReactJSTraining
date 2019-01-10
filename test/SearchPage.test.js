import React from 'react';
import { shallow } from 'enzyme';
import SearchPage from "../src/components/SearchPage";
import movies from '../mocks/movies';

describe('should render SearchPage component', () => {
  const mockedMovies = movies.data.splice(0, 5);
  const component = shallow(<SearchPage movies={mockedMovies} />);
  it('Snapshot test with default props', () => {
    expect(component).toMatchSnapshot();
  });
});
