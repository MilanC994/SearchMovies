import React from "react";
import { Link } from "react-router-dom";
const searchPic  = require("../imgs/search.png")

interface Props  {
  id:string,
  poster_path: string,
  title: string | undefined,
  contentType: string | undefined,
  description: string,
  year: string | undefined

}

const  Slot:React.FC<Props> = (props) => {
  let slotStyle = {
    backgroundImage:
      "url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/" +
      props.poster_path +
      ")",
  };
  let slotLinkTo = props.contentType === 'movies' ? '/movies/' : '/tv-shows/'
  return (
    <Link
      style={slotStyle}
      className="container"
      to={slotLinkTo + props.id}
    >
      <div className="hiddenDiv">
        <img src={searchPic} />
      </div>
      <div className="h2div">
        {" "}
        <h2>{props.title}</h2>
      </div>
    </Link>
  );
} 
export default Slot;
