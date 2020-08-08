import {
  FETCH_VIDEOS,
  FETCH_MOVIES,
  FETCH_MOVIE_DETAILS,
} from "../constActions";
import produce from "immer";

const initialMoviesState = {
  movies: [],
  movieDetails: [],
  videos: [],
  fetchMovieDetailsURL: "https://api.themoviedb.org/3/movie/",
  myAPIkey: "?api_key=78688beda45d758ccfa30212f75784ef",
  topMoviesURL:
    "https://api.themoviedb.org/3/movie/top_rated",
  searchMoviesURL:
    "https://api.themoviedb.org/3/search/movie?api_key=78688beda45d758ccfa30212f75784ef&language=en-US&query=",
};

const moviesReducer = (state = initialMoviesState, action) => {
  switch (action.type) {
    case FETCH_MOVIES: {
      if (action.limit) {
        action.payload.results.length = 10;
      }
      return produce(state, (draft) => {
        draft.movies = action.payload.results;
      });
    }

    case FETCH_MOVIE_DETAILS: {
      return produce(state, (draft) => {
        draft.movieDetails = action.payload;
      });
    }
    case FETCH_VIDEOS: {
      return produce(state, (draft) => {
        draft.videos = action.payload.results;
      });
    }

    default: {
      return state;
    }
  }
};

export default moviesReducer;
