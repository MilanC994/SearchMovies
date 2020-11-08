import {
  FETCH_VIDEOS,
  FETCH_DATA,
  FETCH_CONTENT_DETAILS,
} from "../constActions";
import { dataAction, dataState } from "../stateTypes";

const initialState:dataState = {
  data: [],
  contentDetails:{
    id:'',
    title:'',
    name:'',
    original_name:'',
    poster_path:'',
    overview:'',
    release_date:'',
    first_air_date:''
  },
  videos: []
};

const dataReducer = (state = initialState, action:dataAction) => {
  switch (action.type) {
    case FETCH_DATA: {
      // return produce(state, (draft) => {
      //   draft.data = action.payload.results;
      // });
        return {
          ...state, data:action.payload.results
        }
    }

    case FETCH_CONTENT_DETAILS: {
      // return produce(state, (draft) => {
      //   draft.contentDetails = action.payload;
      // });
      return {
        ...state, contentDetails:action.payload
      }
    }
    case FETCH_VIDEOS: {
      // return produce(state, (draft) => {
      //   draft.videos = action.payload.results;
      // });
      return {
        ...state, videos:action.payload.results
      }
    }

    default: {
      return state;
    }
  }
};

export default dataReducer;
