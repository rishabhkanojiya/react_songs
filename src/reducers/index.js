import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Pow", duration: "6:05" },
    { title: "Sicko Mode", duration: "5:15" },
    { title: "Humble", duration: "3:15" },
    { title: "The Lion sings tonight", duration: "4:15" },
    { title: "Sans", duration: "2:15" }
  ];
};

const songsSelectedReducer = (selectedSong = null, action) => {
  if (action.type === "SELECTED_SONG") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: songsSelectedReducer
});
