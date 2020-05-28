import {
  FETCH_VIDEOS,
  FETCH_MOVIES,
  FETCH_TV_SHOWS,
  SET_TAB,
  SET_SEARCH_BAR,
  FETCH_MOVIE_DETAILS,
  FETCH_TV_SHOW_DETAILS,
} from "./constActions";
import axios from "axios";

export const fetchMovies = (url) => {
  let limitResponses = false;
  if (url.includes("https://api.themoviedb.org/3/movie/top_rated?&api")) {
    limitResponses = true;
  }
  return (dispatch) =>
    axios
      .get(url)
      .then((response) => {
        dispatch({
          type: FETCH_MOVIES,
          payload: response.data,
          limit: limitResponses,
        });
      })
      .catch((er) => console.log(er));
};

export const fetchVideos = (url) => {
  return (dispatch) =>
    axios
      .get(url)
      .then((response) => {
        dispatch({ type: FETCH_VIDEOS, payload: response.data });
      })
      .catch((er) => console.log(er));
};
export const fetchMovieDetails = (url) => {
  return (dispatch) =>
    axios
      .get(url)
      .then((response) => {
        dispatch({ type: FETCH_MOVIE_DETAILS, payload: response.data });
      })
      .catch((er) => console.log(er));
};

export const setSearchBar = (value) => {
  return {
    type: SET_SEARCH_BAR,
    payload: value,
  };
};
export const fetchTVShows = (url) => {
  let limitResponses = false;
  if (url.includes("https://api.themoviedb.org/3/tv/top_rated?&api")) {
    limitResponses = true;
  }
  return (dispatch) =>
    axios
      .get(url)
      .then((response) => {
        dispatch({
          type: FETCH_TV_SHOWS,
          payload: response.data,
          limit: limitResponses,
        });
      })
      .catch((er) => console.log(er));
};

export const setTab = (tab) => {
  return {
    type: SET_TAB,
    payload: tab,
  };
};
