import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import App from "../src/App";

it('should render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App Snapshot', () => {
  it('renders', () => {
    const component = TestRenderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('should fetch data', () => {
  it('should update state with response data', () => {
    const url = 'http://react-cdp-api.herokuapp.com/movies?search=&searchBy=title';
    const mock = new MockAdapter(axios);
    mock
      .onGet(url)
      .reply(200, {
        data: 'expected'
      });

    expect.assertions(1);

    const component = shallow(<App />);
    const instance = component.instance();

    return instance.refreshResults(url).then(() => {
      expect(component.state('data')).toEqual('expected');
      afterEach(() => {
        mock.restore();
      });
    });
  });
});
