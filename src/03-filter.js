const exampleSongData = require("../data/songs");

function getSongsBySaib(songs) {
  return songs.filter((song) => {
    if (song.artist == "Saib") {
      return song;
    }
  });
}

function getSongsOverThreeMinutes(songs) {
  return songs.filter((song) => {
    if (song.runtimeInSeconds > 180) {
      return song;
    }
  });
}

function getTitleTracks(songs) {
  return songs.filter((song) => {
    if (song.title == song.album) {
      return song;
    }
  });
}

module.exports = {
  getSongsBySaib,
  getSongsOverThreeMinutes,
  getTitleTracks,
};
