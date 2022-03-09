/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Reorders the array so that the song objects are organized by their runtime. The shortest song should come first.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortByRuntimeAscending(songs) {
  songs.sort((currentSong, nextSong) => {
    if (currentSong.runtimeInSeconds < nextSong.runtimeInSeconds) {
      return -1;
    } else if (currentSong.runtimeInSeconds > nextSong.runtimeInSeconds) {
      return 1;
    }
    return 0;
  });

  return songs;
}

/**
 * Reorders the array so that the song objects are organized by their artist name. The artist that comes last in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortByArtistNameDescending(songs) {
  songs.sort((currentSong, nextSong) => {
    if (currentSong.artist.toLowerCase() > nextSong.artist.toLowerCase()) {
      return -1;
    } else if (
      currentSong.artist.toLowerCase() < nextSong.artist.toLowerCase()
    ) {
      return 1;
    }
    return 0;
  });

  return songs;
}

/**
 * Reorders the array so that the song objects are organized by their song title. The title that comes first in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortBySongTitleAscending(songs) {
  songs.sort((currentSong, nextSong) => {
    if (currentSong.title.toLowerCase() < nextSong.title.toLowerCase()) {
      return -1;
    } else if (
      currentSong.artist.toLowerCase() > nextSong.artist.toLowerCase()
    ) {
      return 1;
    }
    return 0;
  });

  return songs;
}

module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};
