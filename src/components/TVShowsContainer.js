import React, { Component } from "react";
import { fetchData, setTab } from "../redux/actions";
import { connect } from "react-redux";
import Slot from "./Slot";

class TVShowsContainer extends Component {
  componentDidMount() {
    const myApiKey = process.env.REACT_APP_MY_API_KEY
    this.props.setTab("tvShows");
    if (this.props.searchBar == null || this.props.searchBar.length < 3) {
      this.props.fetchData(this.props.topTVShowsURL+myApiKey);
    } else {
      this.props.fetchData(
        this.props.searchTVShowsURL  + myApiKey+"&language=en-US&query=" + this.props.searchBar
      );
    }
  }

  render() {
    return (
      <div className="moviesOrTVShowsContainer">
        {this.props.tvShows.map((tvShow) => (
          <Slot
            key={tvShow.id}
            id={tvShow.id}
            typeOfContent="tvShows"
            title={tvShow.original_name}
            poster_path={tvShow.poster_path}
            description={tvShow.overview}
            year={tvShow.first_air_date}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tvShows: state.tvShowsReducer.tvShows,
    topTVShowsURL: state.tvShowsReducer.topTVShowsURL,
    searchTVShowsURL: state.tvShowsReducer.searchTVShowsURL,
    searchBar: state.navbarReducer.searchBar,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchData(url)),
    setTab: (tab) => dispatch(setTab(tab)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TVShowsContainer);
