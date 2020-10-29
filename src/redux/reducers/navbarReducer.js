import { SET_TAB, SET_SEARCH_BAR,SET_URL } from "../constActions";
import produce from "immer";

const initialNavbarState = {
  currentTab: "tvShows",
  searchBar: "",
  url:process.env.REACT_APP_TOP_TV_SHOWS_URL +process.env.REACT_APP_MY_API_KEY
};

const navbarReducer = (state = initialNavbarState, action) => {
  switch (action.type) {
    case SET_TAB: {
      return produce(state, (draft) => {
        draft.currentTab = action.payload;
      });
    }
    case SET_SEARCH_BAR: {
      return { ...state, searchBar: action.payload }
    }
    case SET_URL:{
      return{...state, url:action.payload }
    }

    default: {
      return state;
    }
  }
};

export default navbarReducer;
