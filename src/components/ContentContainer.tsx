import React from "react";
import Slot from "./Slot";
import useContentContainer from "./hooks/useContentContainer"


interface Props  {
  contentType: string 
}

const ContentContainer:React.FC<Props> = ( {contentType} ) => {
  const { data } = useContentContainer({ tab: contentType }) 
    return (
      <div className="moviesOrTVShowsContainer">
        {data.map((d) => (
          <Slot
            key={d.id}
            contentType={contentType}
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
