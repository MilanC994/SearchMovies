import { SET_TAB, SET_SEARCH_BAR } from "../constActions";
import produce from "immer";

const initialNavbarState = {
  currentTab: "tvShows",
  searchBar: "",
};

const navbarReducer = (state = initialNavbarState, action) => {
  switch (action.type) {
    case SET_TAB: {
      return produce(state, (draft) => {
        draft.currentTab = action.payload;
      });
    }
    case SET_SEARCH_BAR: {
      return { ...state, searchBar: action.payload };
    }

    default: {
      return state;
    }
  }
};

export default navbarReducer;
