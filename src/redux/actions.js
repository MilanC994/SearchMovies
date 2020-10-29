import {
  FETCH_VIDEOS,
  FETCH_DATA,
  SET_TAB,
  SET_SEARCH_BAR,
  FETCH_CONTENT_DETAILS,
  FETCH_TV_SHOW_DETAILS,
  SET_URL
} from "./constActions";
import axios from "axios";

const getVideosUrl = (tab, id) => {
  return tab === 'movies' ? 
  process.env.REACT_APP_MOVIE_DETAILS_URL + id  + "/videos" +  process.env.REACT_APP_MY_API_KEY
  :
  process.env.REACT_APP__TV_SHOW_DETAILS_URL + id +  "/videos"  + process.env.REACT_APP_MY_API_KEY
}

const getFetchDetailsUrl = (tab, id) => {
  return tab === 'movies' ? 
  process.env.REACT_APP_MOVIE_DETAILS_URL + id + process.env.REACT_APP_MY_API_KEY 
  :
  process.env.REACT_APP__TV_SHOW_DETAILS_URL + id + process.env.REACT_APP_MY_API_KEY

}

const getUrl = (value,tab) => {
  if(tab ==='movies'){
    return value.length>2 ? process.env.REACT_APP_SEARCH_MOVIES_URL +process.env.REACT_APP_MY_API_KEY + "&language=en-US&query=" + value : process.env.REACT_APP_TOP_MOVIES_URL +process.env.REACT_APP_MY_API_KEY;   
  }
  
  return value.length>2 ? process.env.REACT_APP_SEARCH_TV_SHOWS_URL +process.env.REACT_APP_MY_API_KEY + "&language=en-US&query=" + value : process.env.REACT_APP_TOP_TV_SHOWS_URL +process.env.REACT_APP_MY_API_KEY;


}

export const fetchData = (url) => {
  return (dispatch) =>
    axios
      .get(url)
      .then((response) => {
        dispatch({
          type: FETCH_DATA,
          payload: response.data,
          limit: true,
        });
      })
      .catch((er) => console.log(er));
};

export const fetchVideos = (tab, id) => {
  const url = getVideosUrl(tab,id)
  return (dispatch) =>
    axios
      .get(url)
      .then((response) => {
        dispatch({ type: FETCH_VIDEOS, payload: response.data });
      })
      .catch((er) => console.log(er));
};
export const fetchContentDetails = (tab, id) => {
  const url = getFetchDetailsUrl(tab, id)
  return (dispatch) =>
    axios
      .get(url)
      .then((response) => {
        dispatch({ type: FETCH_CONTENT_DETAILS, payload: response.data });
      })
      .catch((er) => console.log(er));
};

export const setSearchBar = (value) => {
  return {
    type: SET_SEARCH_BAR,
    payload: value,
  }
}
export const setURL = (value, tab) => {

  const url = getUrl(value, tab)
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
