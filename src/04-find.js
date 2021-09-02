const exampleSongData = require("../data/songs");

function findPinkElephantsByTimestreet(songs) {
  return songs.find((song) => {
    if (song.title == "Pink Elephants"){
      return song;
    };
  });
};

function findFirstSongUnderThreeMinutes(songs) {
  return songs.find((song) => {
    if (song.runtimeInSeconds < 180){
      return song;
    };
  });
};

/**
 * Returns the first song in the list where the song title equals the song album.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 */
function findFirstTitleTrack(songs) {  
  return songs.find((song) => {
  if (song.title == song.album){
    return song;
  };
});
};

module.exports = {
  findPinkElephantsByTimestreet,
  findFirstSongUnderThreeMinutes,
  findFirstTitleTrack,
};
