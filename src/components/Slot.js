import React from 'react'
import {Link} from 'react-router-dom'
import searchPic from '../imgs/search.png'

 function Slot(props) {
    var slotStyle = {
    
        backgroundImage: "url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/" +  props.poster_path + ")",
        
        
    };
   //https://image.tmdb.org/t/p/w300_and_h450_bestv2
    
        return (
            
          <Link style={slotStyle} className='container' to={"/detailedView/"+props.id}>
              <div className="hiddenDiv"><img  src={searchPic}/></div> 
                  <div className="h2div"> <h2>{props.title}</h2></div>
            </Link>
        )
    }//<img  style={{width:"100%", height:360,borderRadius:10}} src={'https://image.tmdb.org/t/p/original'+props.poster_path}/>
             
export default Slot