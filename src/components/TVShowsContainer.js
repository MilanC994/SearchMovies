import React, { Component } from 'react'
import {fetchTVShows,setTab} from '../redux/actions'
import {connect} from 'react-redux'
import Slot from './Slot'


 class TVShowsContainer extends Component {
    
    componentDidMount() {
        this.props.setTab("tvShows")
        if(this.props.searchBar==null || this.props.searchBar.length<3)
        {this.props.fetchTVShows(this.props.topTVShowsURL);}
        else
        {this.props.fetchTVShows(this.props.searchTVShowsURL+this.props.searchBar)}
        

      }
      
    render() {
        
        return (
            <div className="moviesOrTVShowsContainer">
                
            {this.props.tvShows.map( tvShow=><Slot key={tvShow.id} id={tvShow.id} typeOfContent="tvShows"  title={tvShow.original_name} poster_path={tvShow.poster_path}    description ={tvShow.overview} year ={tvShow.first_air_date} />)}
   

            </div>
            
        )
    }
}   
      
const mapStateToProps=state=>
{
    return{

        tvShows:state.tvShowsReducer.tvShows,
        topTVShowsURL:state.tvShowsReducer.topTVShowsURL,
        searchTVShowsURL:state.tvShowsReducer.searchTVShowsURL,
        searchBar:state.navbarReducer.searchBar
    }
}
const mapDispatchToProps=dispatch=>
{
    return{
        fetchTVShows:(url)=>dispatch(fetchTVShows(url)),
        setTab:(tab)=>dispatch(setTab(tab))

    }
}

export default connect (mapStateToProps,mapDispatchToProps) (TVShowsContainer)
