import React, { useEffect } from "react";
import Slot from "./Slot";
import { useSelector } from "react-redux";
import { fetchData, setTab } from "../redux/actions";
import useContentContainer from "./hooks/useContentContainer"

function TVShowsContainer(props){
  const tab = 'tvShows'
  const url = useSelector((state) => state.navbarReducer.url)
  useContentContainer(fetchData,url,setTab, tab) 
  // useEffect(()=>{
  //   const fetch = async () => {
  //     await dispatch(fetchData(url))
  //   };
 
  //   fetch();
  // },[url])
  const tvShows = useSelector((state) => state.dataReducer.data)
    return (
      <div className="moviesOrTVShowsContainer">
        {tvShows.map((tvShow) => (
          <Slot
            key={tvShow.id}
            id={tvShow.id}
            typeOfContent="tvShows"
            title={tvShow.original_name}
            poster_path={tvShow.poster_path}
            description={tvShow.overview}
            year={tvShow.first_air_date}
          />
        ))}
      </div>
    );
  
}

export default TVShowsContainer
