import dataReducer from "./dataReducer";
import navbarReducer from "./navbarReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  dataReducer,
  navbarReducer,
});

export default rootReducer;
