import React, { Component } from 'react'
import {fetchVideos,fetchMovieDetails} from '../redux/actions'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class DetailedView extends Component {
  


    componentDidMount()
    {
        

        let baseURL
        if(this.props.tab=="movies")
        {
            baseURL = this.props.fetchMovieDetailsURL;
            this.props.fetchMovieDetails(baseURL+this.props.match.params.id+this.props.myAPIkey)
             }
        else{
            baseURL=this.props.searchTvShowDetailsURL
            this.props.fetchMovieDetails(baseURL+this.props.match.params.id+this.props.myAPIkey)
            
        }
        this.props.fetchVideos(baseURL+this.props.match.params.id+"/videos"+this.props.myAPIkey)
         
    }
   
    checkVideos =(videos)=>
    { let key="noVideo"
           for(let i=0;i<videos.length;i++)
            if(videos[i].site=="YouTube")
            {
                key="https://www.youtube.com/embed/"+videos[i].key
                break
            }
        if(key=="noVideo")
        {
            key ="https://image.tmdb.org/t/p/w300_and_h450_bestv2"+ this.props.movieDetails.poster_path
        }
        
        return key
    }
    
    getBackUrl=()=>
    {
        if(this.props.tab=="movies")
            return"/movies"
            else
            {
                return"/"
            }
    }
    getWidth=()=>
    {
        if((this.checkVideos(this.props.videos)).includes("https://image.tmdb.org/t/p/w300_and_h450_bestv2"))
        {
            return 300
        }
        return 600

         
    }
    
    render() { 
        
        
        
        return ( 
            <React.Fragment>
               <Link to={this.getBackUrl()}><label><h4>&#60;Back</h4></label></Link>
            <div className="iframeDV">
                
            <iframe  scrolling="no" width={this.getWidth()} height={450} src={this.checkVideos(this.props.videos)}>
                </iframe>
                <h1>{this.props.movieDetails.title}{this.props.movieDetails.name}</h1>
                <p>{this.props.movieDetails.overview}</p>
                

             
              
         </div>
         </React.Fragment>
         );
    }

  
}
    
         
const mapStateToProps=state=>
{
    return{
        movieDetails:state.moviesReducer.movieDetails,
        tvShowDetails:state.tvShowsReducer.tvShowDetails,
        fetchMovieDetailsURL:state.moviesReducer.fetchMovieDetailsURL,
        searchTvShowDetailsURL:state.tvShowsReducer.searchTvShowDetailsURL,
        myAPIkey:state.moviesReducer.myAPIkey,
        videos:state.moviesReducer.videos,
        searchBar:state.navbarReducer.searchBar,
        tab:state.navbarReducer.currentTab
    }
}
const mapDispatchToProps=dispatch=>
{
    return{
        fetchVideos:(url)=>dispatch(fetchVideos(url)),
        fetchMovieDetails:(url)=>dispatch(fetchMovieDetails(url))


    }
}


export default connect (mapStateToProps,mapDispatchToProps) ( DetailedView)