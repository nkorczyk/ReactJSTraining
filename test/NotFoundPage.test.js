import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../src/components/NotFoundPage';

describe('should render NotFoundPage component', () => {
  const element = shallow(<NotFoundPage />);
  it('Snapshot test with default props', () => {
    expect(element).toMatchSnapshot();
  });
});
