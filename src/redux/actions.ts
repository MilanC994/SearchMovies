import {
  FETCH_VIDEOS,
  FETCH_DATA,
  SET_TAB,
  SET_SEARCH_BAR,
  FETCH_CONTENT_DETAILS
} from "./constActions";
import axios from "axios";

const getVideosUrl = (tab:string | undefined, id: string | undefined) => {
  return tab === 'movies' ? 
  process.env.REACT_APP_MOVIE_DETAILS_URL + id  + "/videos" +  process.env.REACT_APP_MY_API_KEY
  :
  process.env.REACT_APP__TV_SHOW_DETAILS_URL + id +  "/videos"  + process.env.REACT_APP_MY_API_KEY
}

const getFetchDetailsUrl = (tab: string | undefined, id: string | undefined) => {
  return tab === 'movies' ? 
  process.env.REACT_APP_MOVIE_DETAILS_URL + id + process.env.REACT_APP_MY_API_KEY 
  :
  process.env.REACT_APP__TV_SHOW_DETAILS_URL + id + process.env.REACT_APP_MY_API_KEY

}

const getUrl = (value: string | undefined, tab: string | undefined) => {
  if(tab ==='movies'){
    return value && value.length>2 ? process.env.REACT_APP_SEARCH_MOVIES_URL +process.env.REACT_APP_MY_API_KEY + "&language=en-US&query=" + value : process.env.REACT_APP_TOP_MOVIES_URL +process.env.REACT_APP_MY_API_KEY;   
  }
  
  return value && value.length>2 ? process.env.REACT_APP_SEARCH_TV_SHOWS_URL +process.env.REACT_APP_MY_API_KEY + "&language=en-US&query=" + value : process.env.REACT_APP_TOP_TV_SHOWS_URL +process.env.REACT_APP_MY_API_KEY;


}

export const fetchData = (value: string , tab: string) => {
  const url = getUrl(value, tab)
  return (dispatch: (arg0: { type: string; payload: any; limit: boolean; }) => void) =>
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


export const fetchVideos = (tab: string, id: string | undefined) => {
  const url = getVideosUrl(tab,id)
  return (dispatch: (arg0: { type: string; payload: any; }) => void) =>
    axios
      .get(url)
      .then((response) => {
        dispatch({ type: FETCH_VIDEOS, payload: response.data });
      })
      .catch((er) => console.log(er));
};
export const fetchContentDetails = (tab: string | undefined, id: string | undefined) => {
  const url = getFetchDetailsUrl(tab, id)
  return (dispatch: (arg0: { type: string; payload: any; }) => void) =>
    axios
      .get(url)
      .then((response) => {
        dispatch({ type: FETCH_CONTENT_DETAILS, payload: response.data });
      })
      .catch((er) => console.log(er));
};

export const setSearchBar = (value: string) => {
  return {
    type: SET_SEARCH_BAR,
    payload: value,
  }
}


export const setTab = (tab: string ) => {
  return {
    type: SET_TAB,
    payload: tab,
  };
};
