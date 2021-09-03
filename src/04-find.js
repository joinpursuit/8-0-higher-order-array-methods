/*
  Do not change the line below. If you'd like to run code from this file, you 
  may use the `exampleSongData` variable below to gain access to tickets data. 
  This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. 
  You may assume the shape of the data remains the same but that 
  the values may change.

  Keep in mind that your functions must still have and use a parameter 
  for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Returns the song "Pink Elephants" from the song array, if it is in the array.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 */
function findPinkElephantsByTimestreet(songs) {
  // refactored: one line, anonymous arrow callback function, 
  // implicit return inside the callback, no need for curly braces

  // returns the 1st object that meets the condition right of '=>'
  // no need for 'if' statements when using comparison operators
  // they can evaluate to booleans by themselves
  return songs.find((song) => song.title === "Pink Elephants");
}

/**
 * Returns the first song in the list that is under three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 */
function findFirstSongUnderThreeMinutes(songs) {
  // refactored: one line, anonymous arrow callback function, 
  // implicit return inside the callback, no need for curly braces

  // returns the 1st object that meets the condition right of '=>'
  // no need for 'if' statements when using comparison operators
  // they can evaluate to booleans by themselves
  return songs.find((song) => song.runtimeInSeconds < 180);
}

/**
 * Returns the first song in the list where the song title equals the song album.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object} A single object.
 */
function findFirstTitleTrack(songs) {
  // refactored: one line, anonymous arrow callback function, 
  // implicit return inside the callback, no need for curly braces

  // returns the 1st object that meets the condition right of '=>'
  // no need for 'if' statements when using comparison operators
  // they can evaluate to booleans by themselves
  return songs.find((song) => song.title === song.album);
}

module.exports = {
  findPinkElephantsByTimestreet,
  findFirstSongUnderThreeMinutes,
  findFirstTitleTrack,
};
