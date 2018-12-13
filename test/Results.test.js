import React from 'react';
import { mount } from 'enzyme';
import Results from "../src/components/Results";

describe('should render Footer component', () => {
  const element = mount(<Results items={10} />);
  test('Snapshot test with default props', () => {
    expect(element).toMatchSnapshot();
  });
});

describe('should render Footer component with 10 items', () => {
  const element = mount(<Results items={10} />);
  expect(element.prop('items')).toEqual(10);
});
