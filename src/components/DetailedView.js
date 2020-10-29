import React from "react";
import { useDetailedView } from './hooks/useDetailedView'
import { useSelector } from "react-redux";


function DetailedView (props) {
  const tab = useSelector((state) => state.navbarReducer.currentTab)
  useDetailedView(tab, props.match.params.id)
  const movieDetails = useSelector(state => state.dataReducer.contentDetails)
  const videos =  useSelector(state => state.dataReducer.videos)
  const video = videos.find(vid => vid.site ==='YouTube')
  const title = movieDetails.title
    ? movieDetails.title
    : movieDetails.name;

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
        <img src={'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' +movieDetails.poster_path} />
      
      }
        <h1>{title}</h1>
        <p>{movieDetails.overview}</p>
      </div>
    </React.Fragment>
  );

}

export default DetailedView
