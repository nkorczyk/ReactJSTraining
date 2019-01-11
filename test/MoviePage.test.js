import React from 'react';
import { shallow } from 'enzyme';
import MoviePage from "../src/components/MoviePage";
import movies from '../mocks/movies';

describe('should render MoviePage component', () => {
  const mockedMovies = movies.data.splice(0, 5);
  const component = shallow(<MoviePage movies={mockedMovies} />);
  it('Snapshot test with default props', () => {
    expect(component).toMatchSnapshot();
  });
});
