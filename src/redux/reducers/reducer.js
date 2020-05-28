import moviesReducer from "./moviesReducer";
import tvShowsReducer from "./tvShowsReducer";
import navbarReducer from "./navbarReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  moviesReducer,
  tvShowsReducer,
  navbarReducer,
});

export default rootReducer;
