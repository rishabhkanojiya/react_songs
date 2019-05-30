import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

export class SongList extends Component {
  renderList = () => {
    return this.props.songs.map(song => {
      return (
        <div key={song.title}>
          <div className="list-group mb-2 shadow-sm">
            <button
              type="button"
              onClick={() => {
                this.props.selectSong(song);
              }}
              className="list-group-item list-group-item-action "
            >
              {song.title}
            </button>
          </div>
        </div>
      );
    });
  };

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { songs: state.songs };
  //the 'songs' here is the key from combineReducers in reducers
};

export default connect(
  mapStateToProps,
  { selectSong: selectSong }

  //here selectSong is an action which will act as a prop now
)(SongList);
