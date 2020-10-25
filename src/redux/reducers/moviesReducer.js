import {
  FETCH_VIDEOS,
  FETCH_MOVIES,
  FETCH_MOVIE_DETAILS,
} from "../constActions";
import produce from "immer";

const initialMoviesState = {
  movies: [],
  movieDetails: [],
  videos: []
};

const moviesReducer = (state = initialMoviesState, action) => {
  switch (action.type) {
    case FETCH_MOVIES: {
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
