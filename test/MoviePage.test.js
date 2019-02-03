import React from 'react';
import { shallow } from 'enzyme';
import MoviePage from '../src/components/MoviePage';

describe('should render MoviePage component', () => {
  const component = shallow(<MoviePage />);
  it('Snapshot test with default props', () => {
    expect(component).toMatchSnapshot();
  });
});
