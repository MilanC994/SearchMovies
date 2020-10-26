import dataReducer from "./dataReducer";
import tvShowsReducer from "./tvShowsReducer";
import navbarReducer from "./navbarReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  dataReducer,
  tvShowsReducer,
  navbarReducer,
});

export default rootReducer;
