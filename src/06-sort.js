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
  return songs.sort((x, y) => {
    if(x.runtimeInSeconds - y.runtimeInSeconds)
    return x.runtimeInSeconds - y.runtimeInSeconds
  })
}

/**
 * Reorders the array so that the song objects are organized by their artist name. 
 * The artist that comes last in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. 
 * To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortByArtistNameDescending(songs) {
  return songs.sort((song, song2) => {
    let uno = song.artist.toLowerCase();
    let dos = song2.artist.toLowerCase();
    if (uno > dos) return -1; // if this appears first, return a number less than 0
    if (uno < dos) return 1; //if it appears after the second in the assorted array, it should return a number > 0
    return 0; //if it's equivalent
  })
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
  return songs.sort((song, song2) => {
    let uno = song.title.toLowerCase();
    let dos = song2.title.toLowerCase();
    if (uno < dos) return -1; // if this appears first, return a number less than 0
    if (uno > dos) return 1; //if it appears after the second in the assorted array, it should return a number > 0
    return 0; //if it's equivalent
  })
}


module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};
