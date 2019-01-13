import React from 'react';
import { shallow } from 'enzyme';
import NotFound from "../src/components/NotFound";

describe('should render NotFound component', () => {
  const element = shallow(<NotFound />);
  it('Snapshot test with default props', () => {
    expect(element).toMatchSnapshot();
  });
});
