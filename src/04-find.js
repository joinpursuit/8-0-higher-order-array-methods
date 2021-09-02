const exampleSongData = require("../data/songs");

function findPinkElephantsByTimestreet(songs) {
  return songs.find((song) => {
    if (song.title == "Pink Elephants") {
      return song;
    }
  });
}

function findFirstSongUnderThreeMinutes(songs) {
  return songs.find((song) => {
    if (song.runtimeInSeconds < 180) {
      return song;
    }
  });
}

function findFirstTitleTrack(songs) {
  return songs.find((song) => {
    if (song.title == song.album) {
      return song;
    }
  });
}

module.exports = {
  findPinkElephantsByTimestreet,
  findFirstSongUnderThreeMinutes,
  findFirstTitleTrack,
};
