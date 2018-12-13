import { shallow } from 'enzyme';
import React from 'react';
import ErrorBoundary from '../src/components/ErrorBoundary';

describe('ErrorBoundary Component', () => {
  let element;
  beforeEach(() => {
    element = shallow(<ErrorBoundary><div>custom content</div></ErrorBoundary>);
  });

  test('Snapshot test with default props', () => {
    expect(element).toMatchSnapshot();
    expect(element.html()).toEqual('<div>custom content</div>');
  });

  test('Should render error message when hasError is set in the state', () => {
    element.setState({ hasError: true });
    expect(element.text()).toEqual('Error occurred while fetching the data!');
  });

  test('Should update component state when componentDidCatch is invoked', () => {
    element.instance().componentDidCatch('error', 'error');
    expect(element.state('hasError')).toEqual(true);
  });
});
