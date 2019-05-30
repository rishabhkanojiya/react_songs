import "./App.css";
import React from "react";
import SongList from "./SongList";
import Song from "./Song";

const App = () => {
  return (
    <div>
      <Song />
      <SongList />
    </div>
  );
};

export default App;
