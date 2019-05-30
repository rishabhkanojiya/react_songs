import React from "react";

import { connect } from "react-redux";

const Song = ({ song }) => {
  console.log(song);
  if (song) {
    return (
      <div>
        <div className="card border-primary">
          <div className="card-header" />
          <div className="card-body">
            <h4 className="card-title">{song.title}</h4>
            <p className="card-text">{song.duration}</p>
          </div>
        </div>
      </div>
    );
  }
  return <div>Select any song</div>;
};

const mapStateToProps = state => {
  return {
    song: state.selectedSong
  };

  // here selectedSOng os form combineReducers from reducer
};

export default connect(mapStateToProps)(Song);
