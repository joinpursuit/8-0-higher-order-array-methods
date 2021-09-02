const exampleSongData = require("../data/songs");

function getSongTitles(songs) {
  return songs.map((song) => {
    return song.title;
  });
};

function getSongDetails(songs) {
  return songs.map((song) => {
    return `${song.title} by ${song.artist}`;
  });
};

/**
 * Returns an array of objects, where each object has a key that is the song title and has a value that is the song artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 *
 * EXAMPLE:
 *  getTitleAndArtist(songs);
 *  //> [ { "Berlin Tsukin": "Taiyo Ky" }, { Up: "Sebastian Kamae" }, ... ]
 */
function getTitleAndArtist(songs) {
  return songs.map((song) => {
    return { [song.title]: song.artist};
  });
};

module.exports = {
  getSongTitles,
  getSongDetails,
  getTitleAndArtist,
};
