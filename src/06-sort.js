/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Reorders the array so that the song objects are organized by their runtime.
 * The shortest song should come first.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortByRuntimeAscending(songs) {
  //Sorts songs by song play time in ascending order
  return songs.sort((a, b) => a.runtimeInSeconds - b.runtimeInSeconds);
}

/**
 * Reorders the array so that the song objects are organized by their
 * artist name.
 * The artist that comes last in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use
 * `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortByArtistNameDescending(songs) {
  //Sorts songs by artist name in ascending order (case-sensitive)
  return songs.sort((latest, first) => {
    if (latest.artist.toLowerCase() > first.artist.toLowerCase()) {
      return -1;
    }
  });
}

/**
 * Reorders the array so that the song objects are organized by their song title.
 * The title that comes first in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use
 * `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortBySongTitleAscending(songs) {
    //Sorts songs by artist name in descending order (case-sensitive)
  return songs.sort((latest, first) => {
    if (latest.title.toLowerCase() < first.title.toLowerCase()) {
      return -1;
    }
  });
}

module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};
