import React from 'react';
import { mount } from 'enzyme';
import SearchPage from "../src/components/SearchPage";

describe('should render SearchPage component', () => {
  const movies_data = [{
    "id": 321612,
    "title": "Beauty and the Beast",
    "tagline": "Be our guest.",
    "vote_average": 6.8,
    "vote_count": 7861,
    "release_date": "2017-03-16",
    "poster_path": "https://image.tmdb.org/t/p/w500/tWqifoYuwLETmmasnGHO7xBjEtt.jpg",
    "overview": "A live-action adaptation of Disney's version",
    "genres": [
      "Family",
      "Fantasy",
      "Romance"
    ],
  }];
  const element = mount(<SearchPage movies={movies_data} />);
  test('Snapshot test with default props', () => {
    expect(element).toMatchSnapshot();
  });
});
