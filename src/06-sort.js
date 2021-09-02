/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
const { anySongIsByPeanut } = require("./05-some-every");
// Do not change the line above.

/**
 * Reorders the array so that the song objects are organized by their runtime. The shortest song should come first.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
function sortByRuntimeAscending(songs) {

  return songs.sort((songA, songB) => {
    return songA.runtimeInSeconds - songB.runtimeInSeconds 
  })
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

  return songs.sort((songA, songB) => {
    
    let firstArt = songA.artist.toLowerCase()
    let secondArt = songB.artist.toLowerCase()
    if (secondArt < firstArt) {
      return -1;
    }
    if (secondArt > firstArt) {
      return 1;
    }
    return 0;
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

  return songs.sort((songA, songB) => {
    
    let firstTitle = songA.title.toLowerCase()
    let secondTitle = songB.title.toLowerCase()
    if (firstTitle < secondTitle) {
      return -1;
    }
    if (firstTitle > secondTitle) {
      return 1;
    }
    return 0;
  })


}

module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};