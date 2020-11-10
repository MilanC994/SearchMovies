import React from "react";
import { useDetailedView } from './hooks/useDetailedView'
import { RouteComponentProps } from 'react-router'

interface MatchParams {
  id: string;
}
interface MatchProps extends RouteComponentProps<MatchParams>  {
  id: string;
}

const ContentContainer:React.FC<MatchProps> = ( props ) => {
  
  const { contentDetails, video } =useDetailedView( props.match.params.id )

  const title = contentDetails.title
    ? contentDetails.title
    : contentDetails.name;

  return (
    <React.Fragment>
        <label onClick = {props.history.goBack}>
          <h4>&#60;Back</h4>
        </label>
      <div className="iframeDV">
        {video ? <iframe
          scrolling="no"
          width={600}
          height={450}
          src={'https://www.youtube.com/embed/'+video.key}
        ></iframe> 
        :
        <img src={'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' +contentDetails.poster_path} />
      
      }
        <h1>{title}</h1>
        <p>{contentDetails.overview}</p>
      </div>
    </React.Fragment>
  );

}

export default ContentContainer
