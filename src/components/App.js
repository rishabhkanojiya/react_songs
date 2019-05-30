import "./App.css";
import React from "react";
import SongList from "./SongList";
import Song from "./Song";

const App = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-5">
          <SongList />
        </div>
        <div className="col-lg-7">
          <Song />
        </div>
      </div>
    </div>
  );
};

export default App;
