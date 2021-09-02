const exampleSongData = require("../data/songs");

function getSongTitles(songs) {
  return songs.map((song) => {
    return song.title;
  });
}

function getSongDetails(songs) {
  return songs.map((song) => {
    return `${song.title} by ${song.artist}`;
  });
}

function getTitleAndArtist(songs) {
  return songs.map((song) => {
    return { [song.title]: song.artist };
  });
}

module.exports = {
  getSongTitles,
  getSongDetails,
  getTitleAndArtist,
};
