import configStore from '../src/actions/store';
import initialState from '../src/reducers/initialState';

const { store } = configStore();

describe('Store', () => {
  it('should have a getState method that will restore the default state', () => {
    const expectedState = {
      ...initialState,
      _persist: {
        'rehydrated': true,
        'version': -1,
      }
    };
    expect(store.getState()).toEqual(expectedState);
  });
});
