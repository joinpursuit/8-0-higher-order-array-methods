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
  let newObj = songs.sort((a, b) => a.runtimeInSeconds > b.runtimeInSeconds ? 1 : -1)
  return newObj
}

/**
 * Reorders the array so that the song objects are organized by their artist name. The artist that comes last in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */



/** https://stackoverflow.com/questions/2440700/reordering-arrays/2440723 & https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort*/



function sortByArtistNameDescending(songs) {
  let descendingArray = songs.sort((a, b) => {
    if (a.artist.toLowerCase() === b.artist.toLowerCase()) return 0;
    else if (a.artist.toLowerCase() < b.artist.toLowerCase()) return 1;
    else return -1;
  })
  return descendingArray

}

console.log(sortByArtistNameDescending)

/**
 * Reorders the array so that the song objects are organized by their song title. The title that comes first in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortBySongTitleAscending(songs) {
  let songsArr = songs.sort((a, b) => {
    if (a.title.toLowerCase() === b.title.toLowerCase()) return 0;
    else if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
    else return -1;
  })
  return songsArr;
}

module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};
