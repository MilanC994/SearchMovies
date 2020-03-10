import {FETCH_TV_SHOWS} from '../constActions'
import produce from 'immer'

const initialTVShowsState ={
    tvShows:[],
    tvShowDetails:[],
    searchTvShowDetailsURL:"https://api.themoviedb.org/3/tv/",
    topTVShowsURL:"https://api.themoviedb.org/3/tv/top_rated?&api_key=78688beda45d758ccfa30212f75784ef",
    searchTVShowsURL:"https://api.themoviedb.org/3/search/tv?api_key=78688beda45d758ccfa30212f75784ef&language=en-US&query="
}

const tvShowsReducer =(state=initialTVShowsState,action)=>
{
    switch(action.type)
    {
       
       case FETCH_TV_SHOWS:
        {
            if(action.limit)
            {action.payload.results.length =10}
            return   produce(state, draft=>{
            draft.tvShows = action.payload.results
            

          
        })
       }
      
          
        default: 
        {return state}
        }
        
}

export default tvShowsReducer