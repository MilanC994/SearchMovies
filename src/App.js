import React from 'react';
import './App.css'
import MoviesContainer from './components/MoviesContainer'
import TVShowsContainer from './components/TVShowsContainer';
import DetailedView from './components/DetailedView'
import {Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar';



const Home = ({match}) => {
 
  return(
    <React.Fragment>
    <Navbar/>
    <Switch>
       
        <Route exact={true} path={match.url} component= {TVShowsContainer}/>
        <Route  path={`${match.url}movies`} component= {MoviesContainer}/>
      </Switch>
      </React.Fragment>
        );
    }


function App ()  {
   
    return (
    <div className="App">
      <Switch>
      <Route exact path="/detailedView/:id" component={DetailedView}/>
      <Route  path = "/" component = {Home}/>  
     
      
      </Switch>
    </div>
    

    );
  
}
    


export default App
