import React from "react";
import Song_list from "./Song_list";
import Song from "./Song";
import "./App.css";

const App = () => {
  return (
    <div>
      <Song />
      <Song_list />
    </div>
  );
};

export default App;
