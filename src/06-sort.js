const exampleSongData = require("../data/songs");

function sortByRuntimeAscending(songs) {
  return songs.sort((song1, song2) => song1.runtimeInSeconds - song2.runtimeInSeconds);
}

function sortByArtistNameDescending(songs) {}

/**
 * Reorders the array so that the song objects are organized by their song title. The title that comes first in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortBySongTitleAscending(songs) {}

module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};
