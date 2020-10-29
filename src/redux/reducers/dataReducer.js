import {
  FETCH_VIDEOS,
  FETCH_DATA,
  FETCH_CONTENT_DETAILS,
} from "../constActions";
import produce from "immer";

const initialMoviesState = {
  data: [],
  contentDetails: [],
  videos: []
};

const dataReducer = (state = initialMoviesState, action) => {
  switch (action.type) {
    case FETCH_DATA: {
      return produce(state, (draft) => {
        draft.data = action.payload.results;
      });
    }

    case FETCH_CONTENT_DETAILS: {
      return produce(state, (draft) => {
        draft.contentDetails = action.payload;
      });
    }
    case FETCH_VIDEOS: {
      return produce(state, (draft) => {
        draft.videos = action.payload.results;
      });
    }

    default: {
      return state;
    }
  }
};

export default dataReducer;
