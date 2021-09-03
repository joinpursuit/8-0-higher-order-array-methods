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
  return songs.sort((song1, song2) => {
    if(song1.runtimeInSeconds > song2.runtimeInSeconds){
      return 1;
    }else if (song2.runtimeInSeconds > song1.runtimeInSeconds){
      return -1;
    } else {
      return 0;
    }
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
  return songs.sort((song1, song2) => {
    let art1 = song1.artist.toLowerCase();
    let art2 = song2.artist.toLowerCase();
    if(art1 > art2){
      return -1;
    } else if (art2 > art1){
      return 1;
    }else {
      return 0;
    }
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
  return songs.sort((song1, song2) => {
    let title1 = song1.title.toLowerCase();
    let title2 = song2.title.toLowerCase();
    if (title1 > title2){
      return 1;
    } else if (title2 > title1){
      return -1;
    } else {
      return 0;
    }
  })
}

module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};
