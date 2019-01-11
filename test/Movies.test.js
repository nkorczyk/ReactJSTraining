import movies from '../src/reducers/movies';
import ACTION_TYPES from '../src/actions/types';

describe('Movies Reducer', () => {
  it('should return the expected state', () => {
    const mock = {
      type: ACTION_TYPES.LOAD_MOVIES
    };
    const expectedState = {
      status: ACTION_TYPES.LOAD_MOVIES
    };

    expect(movies({}, mock)).toStrictEqual(expectedState);
  });

  it('should return the expected state', () => {
    const mock = {
      type: ACTION_TYPES.LOAD_MOVIES_SUCCESS,
      movies: ['fifty', 'wars', 'dragon']
    };
    const expectedState = {
      data: ['fifty', 'wars', 'dragon'],
      status: ACTION_TYPES.LOAD_MOVIES_SUCCESS
    };

    expect(movies({}, mock)).toStrictEqual(expectedState);
  });

  it('should return the expected state', () => {
    const mock = {
      type: ACTION_TYPES.LOAD_MOVIES_ERROR,
      movies: ['fifty', 'wars', 'dragon']
    };
    const expectedState = {
      data: [],
      status: ACTION_TYPES.LOAD_MOVIES_ERROR
    };

    expect(movies({}, mock)).toStrictEqual(expectedState);
  });
});
