/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const songs = require("../data/songs");
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Returns `true` if every song is over two minutes. Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */

//creates a function to get all songs over two minutes with the parameter songs which is an array 
// function allSongsAreOverTwoMinutes(songs) {
  //using the every method on the array songs to check every iteration and return 
  // return songs.every((song) => {
    //songs over two minutes if the conditional statement is true 
    //iteration through array run time in seconds is over 3minutes return true
    // song.runtimeInSeconds > 180
      
    // }
// )
// }
  
  const allSongsAreOverTwoMinutes = (songs) => songs.every((song) => song.runtimeInSeconds > 120);


/**
 * Returns `true` if any song is over four minutes. Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */
//creates a function of any song is over four minutes with the parameter songs which is an array
// function anySongIsOverFourMinutes(songs) {
  //using the some method on the array songs iterate through the array and return 
  // return songs.some((song) => {
    //songs over four minutes if the conditional statement is true
    // iterations of runtimeInSeconds is greater than 4 minutes return true

    // song.runtimeInSeconds > 240

    // }
    
  // )
// }
const anySongIsOverFourMinutes = (songs) => songs.some((song) => song.runtimeInSeconds > 240);

/**
 * Returns `true` if any song is by the artist "Peanut". Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */

//creates a function of any song by the artist Peanut with the parameter songs which is an array
// function anySongIsByPeanut(songs) {
  //using the some method to iterate through the array song
  // return songs.some((song) => 
  //if iteration of song artist by "Peanut" is true 
    // song.artist === "Peanut"
    
  // )
// }
const anySongIsByPeanut = (songs) => songs.some((song) => song.artist === "Peanut");




module.exports = {
  allSongsAreOverTwoMinutes,
  anySongIsOverFourMinutes,
  anySongIsByPeanut,
};
