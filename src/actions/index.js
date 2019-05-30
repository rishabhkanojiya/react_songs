// Action creater
export const selectSong = song => {
  return {
    type: "SELECTED_SONG",
    payload: song
  };
};
