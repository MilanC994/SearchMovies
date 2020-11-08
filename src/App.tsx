import React from "react";
import "./App.css";
import ContentContainer from "./components/ContentContainer";
import DetailedView from "./components/DetailedView";
import { Switch, Route, RouteComponentProps  } from "react-router-dom";
import Navbar from "./components/Navbar";

// interface MatchParams{
//   url: string 
// }

const Home:React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
      <Route exact={true} path={`${match.url}tv-shows`} render={(props) => (
            <ContentContainer {...props} contentType='tv-shows' />
          )}
        />
        <Route path={`${match.url}movies`} render={(props) => (
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
        <Route exact path="/movies/:id" component={DetailedView} />
        <Route exact path="/tv-shows/:id" component={DetailedView} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
