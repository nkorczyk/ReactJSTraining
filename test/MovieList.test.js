import React from 'react';
import { shallow } from 'enzyme';
import MoviesList from '../src/components/MoviesList';
import movies from '../mocks/movies';

describe('MoviesList', () => {
  it('should rendered correctly without any movie', () => {
    const mockedMovies = [];
    const component = shallow(<MoviesList movies={mockedMovies} />);
    expect(component).toMatchSnapshot();
  });

  it('should rendered correctly with 5 movies', () => {
    const mockedMovies = movies.data.splice(0, 5);
    const component = shallow(<MoviesList movies={mockedMovies} />);
    expect(component).toMatchSnapshot();
  });
});
