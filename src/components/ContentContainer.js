import React from "react";
import Slot from "./Slot";
import { useSelector } from "react-redux";
import useContentContainer from "./hooks/useContentContainer"

function ContentContainer(props){
  const url = useSelector((state) => state.navbarReducer.url)
  const searchBar = useSelector((state) => state.navbarReducer.searchBar)
  useContentContainer(url, props.contentType, searchBar) 
  const data = useSelector((state) => state.dataReducer.data)
  
    return (
      <div className="moviesOrTVShowsContainer">
        {data.map((d) => (
          <Slot
            key={d.id}
            typeOfContent={props.contentType}
            id={d.id}
            title={d.title || d.original_name}
            poster_path={d.poster_path}
            description={d.overview}
            year={d.release_date || d.first_air_date}
          />
        ))}
      </div>
    );
  
}

export default ContentContainer
