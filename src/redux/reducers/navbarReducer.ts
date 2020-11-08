import { SET_TAB, SET_SEARCH_BAR } from "../constActions";
import { navbarAction, navbarState } from "../stateTypes"


const initialNavbarState: navbarState = {
  currentTab: "tv-shows ",
  searchBar: "",
};

const navbarReducer = (state = initialNavbarState, action: navbarAction) => {
  switch (action.type) {
    case SET_TAB: {
      // return produce(state, (draft) => {
      //   draft.currentTab = action.payload;
      // });
      return {...state, currentTab: action.payload}
    }
    case SET_SEARCH_BAR: {
      return { ...state, searchBar: action.payload }
    }

    default: {
      return state;
    }
  }
};

export default navbarReducer;
