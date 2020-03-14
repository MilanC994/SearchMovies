import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchMovies,fetchTVShows,setSearchBar} from '../redux/actions'
import searchLogo from '../imgs/icons8searchbar.png'






class Navbar extends React.Component {
    constructor(props)
    {
      super(props);
      
      this.timeout=0
      this.searchTerm=""
      this.searchBarRef= React.createRef();

    }
   componentDidMount()
   {
     this.searchBarRef.current.value=this.props.searchBar
   }
    

    performSearch(searchTerm)
    {
      let url,length = searchTerm.length
      this.props.setSearchBar(searchTerm)
      if(length<=2 || length==null)
      {
   
        if(this.props.tab=="movies")
        {
    
          url = this.props.topMoviesURL
         
        this.props.fetchMovies(url)
        }
        else if(this.props.tab=="tvShows"){

          url = this.props.topTVShowsURL
        this.props.fetchTVShows(url)

        }
      }
      if(searchTerm.length>2)
      {
        
        if(this.props.tab=="movies")
        {url=this.props.searchMoviesURL
          url+=searchTerm
          this.props.fetchMovies(url)
        }
        else if(this.props.tab=="tvShows"){
          url=this.props.searchTVShowsURL
          url+=searchTerm
          this.props.fetchTVShows(url)
        } 
      
      
      }

    }
    onsearchChange=(event)=>
    {
      this.searchTerm=event.target.value
       if(this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(() => this.performSearch(this.searchTerm), 1000);

    }


    render(){
      
      

    return (
      <div className="header">
        <div className="PageSwitch">
         <Link to="/movies"><button className={this.moviesBtnClass()} >Movies</button></Link><Link to="/"><button className={this.tvShowBtnClass()} >TV Shows</button><br/></Link>
         </div>
          <div className="searhhBoxDiv"><input ref={this.searchBarRef} type="text"  onChange={this.onsearchChange} placeholder="Enter Search Term"/><img src={searchLogo}/></div>
      </div>


  );
  }

  tvShowBtnClass() {
    return this.props.tab == "tvShows" ? ("btn rightBtn activeBtn") : ("btn rightBtn inactiveBtn");
  }

  moviesBtnClass() {
    return this.props.tab == "movies" ? ("btn leftBtn activeBtn") : ("btn leftBtn inactiveBtn");
  }
}
    
const mapStateToProps=state=>
{
    return{
      
        topMoviesURL:state.moviesReducer.topMoviesURL,
        topTVShowsURL:state.tvShowsReducer.topTVShowsURL,
        searchMoviesURL:state.moviesReducer.searchMoviesURL,
        searchTVShowsURL:state.tvShowsReducer.searchTVShowsURL,
        searchBar:state.navbarReducer.searchBar,
        tab:state.navbarReducer.currentTab
    }
}
const mapDispatchToProps=dispatch=>
{
    return{
        fetchMovies:(url)=>dispatch(fetchMovies(url)),
        fetchTVShows:(url)=>dispatch(fetchTVShows(url)),
        setSearchBar:(val)=>dispatch(setSearchBar(val))
    }
}

export default connect (mapStateToProps,mapDispatchToProps) ( Navbar)
