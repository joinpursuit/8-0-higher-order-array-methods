/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Returns `true` if every song is over two minutes. Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */
function allSongsAreOverTwoMinutes(songs) {
  let overTwoMinSongs = songs.every((elem) => {
    return elem.runtimeInSeconds > 120;
  })
  return overTwoMinSongs;
}

/**
 * Returns `true` if any song is over four minutes. Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */
function anySongIsOverFourMinutes(songs) {
  let songsOverFourMin = songs.some((elem) => {
    return elem.runtimeInSeconds > 240;
  })
  return songsOverFourMin;
}

/**
 * Returns `true` if any song is by the artist "Peanut". Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */
function anySongIsByPeanut(songs) {
  let anySong = songs.some((elem) => {
    return elem.artist === "Peanut";
   })
   return anySong;
}

module.exports = {
  allSongsAreOverTwoMinutes,
  anySongIsOverFourMinutes,
  anySongIsByPeanut,
};
