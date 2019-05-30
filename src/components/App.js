import React from "react";
import SongList from "./SongList";
import Song from "./Song";
import "./App.css";

const App = () => {
  return (
    <div>
      <Song />
      <SongList />
    </div>
  );
};

export default App;
