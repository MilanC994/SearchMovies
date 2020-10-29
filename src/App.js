import React from "react";
import "./App.css";
import ContentContainer from "./components/ContentContainer";
import DetailedView from "./components/DetailedView";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home = ({ match }) => {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact={true} path={match.url} render={(props) => (
            <ContentContainer {...props} contentType='tvShows' />
          )}
        />
        <Route path={`${match.url}movies`} contentType = 'movies'  render={(props) => (
            <ContentContainer {...props} contentType='movies' />
          )} />
      </Switch>
    </React.Fragment>
  );
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/detailedView/:id" component={DetailedView} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
