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
  return songs.filter(song => song.runtimeInSeconds).sort((a, b) => a.runtimeInSeconds - b.runtimeInSeconds)
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
  let byArtistNAme = songs.filter((song) => song.artist);
  byArtistNAme.sort((a, b) => {
    let lowerCaseArtistStart = a.artist.toLowerCase();
    let lowerCaseArtistEnd = b.artist.toLowerCase();
      if (lowerCaseArtistEnd > lowerCaseArtistStart){
        return 1;
      }
      if (lowerCaseArtistStart > lowerCaseArtistEnd){
        return -1;
      }
  })
  return byArtistNAme
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
  let byArtistNAme = songs.filter((song) => song.title);
  byArtistNAme.sort((a, b) => {
    let lowerCaseArtistStart = a.title.toLowerCase();
    let lowerCaseArtistEnd = b.title.toLowerCase();
      if (lowerCaseArtistEnd > lowerCaseArtistStart){
        return -1;
      }
      if (lowerCaseArtistStart > lowerCaseArtistEnd){
        return 1;
      }
  })
  return byArtistNAme
}

module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};
