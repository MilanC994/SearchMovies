import {
  FETCH_VIDEOS,
  FETCH_MOVIES,
  FETCH_TV_SHOWS,
  SET_TAB,
  SET_SEARCH_BAR,
  FETCH_MOVIE_DETAILS,
  FETCH_TV_SHOW_DETAILS,
  SET_URL
} from "./constActions";
import axios from "axios";


export const fetchData = (url) => {
  console.log("CALLING FETCH  ", url)
  return (dispatch) =>
    axios
      .get(url)
      .then((response) => {
        console.log(response, "<<<RESPOOONSE")
        dispatch({
          type: FETCH_MOVIES,
          payload: response.data,
          limit: true,
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
  console.log("Setting Search Bar")
  return {
    type: SET_SEARCH_BAR,
    payload: value,
  }
}
export const setURL = (value,tab) => {

  let url
  console.log(tab, tab ==='movies', tab=='movies')
  if(tab ==='movies'){
    console.log("tab je movies")
    url = value.length>2 ? process.env.REACT_APP_SEARCH_MOVIES_URL +process.env.REACT_APP_MY_API_KEY + "&language=en-US&query=" + value : process.env.REACT_APP_TOP_MOVIES_URL +process.env.REACT_APP_MY_API_KEY;   
  }
  else{
    console.log("else nekako..", value.length)
    url = value.length>2 ? process.env.REACT_APP_SEARCH_TV_SHOWS_URL +process.env.REACT_APP_MY_API_KEY + "&language=en-US&query=" + value : process.env.REACT_APP_TOP_TV_SHOWS_URL +process.env.REACT_APP_MY_API_KEY;
  }
  console.log("U Akciji SET URL URL : ", url)
  return {
    type: SET_URL,
    payload: url,
  }
}

export const setTab = (tab) => {
  return {
    type: SET_TAB,
    payload: tab,
  };
};
