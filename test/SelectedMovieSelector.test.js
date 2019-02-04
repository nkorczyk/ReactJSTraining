import SelectedMovieSelector from '../src/selectors/SelectedMovieSelector';

it('should mapStateToProps', () => {
  const mockedState = {
    movies: {
      data: ["test"]
    },
  };

  const expectedResult = ["test"];

  expect(SelectedMovieSelector(mockedState)).toEqual(expectedResult);
});
