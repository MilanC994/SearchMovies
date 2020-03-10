import React, { Component } from 'react'
import Slot from './Slot'
import {connect} from 'react-redux'
import {fetchMovies,setTab} from '../redux/actions'



 class MoviesContainer extends Component {
    
    componentDidMount() {
        this.props.setTab("movies")
        if(this.props.searchBar==null || this.props.searchBar.length<3)
        {  this.props.fetchMovies(this.props.topMoviesURL)}
        else
        {this.props.fetchMovies(this.props.searchMoviesURL+this.props.searchBar)}

          
    }
    
    render() {
        
        return (
            
            
            <div className="moviesOrTVShowsContainer">
                
                {this.props.movies.map( movie=><Slot key={movie.id} typeOfContent = "movies" id={movie.id}  title={movie.title} poster_path={movie.poster_path}    description ={movie.overview} year ={movie.release_date} />)}
            

            </div>
        )
    }
}   

const mapStateToProps=state=>
{
    return{
        movies:state.moviesReducer.movies,
        topMoviesURL:state.moviesReducer.topMoviesURL,
        searchMoviesURL:state.moviesReducer.searchMoviesURL,
        tab:state.navbarReducer.currentTab,
        searchBar:state.navbarReducer.searchBar
    }
}
const mapDispatchToProps=dispatch=>
{
    return{
        fetchMovies:(url)=>dispatch(fetchMovies(url)),
        setTab:(tab)=>dispatch(setTab(tab))
        
    }
}

export default connect (mapStateToProps,mapDispatchToProps) ( MoviesContainer)
