/*
  Do not change the line below. If you'd like to run code from this file, 
  you may use the `exampleSongData` variable below to gain access to 
  tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the 
  shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter 
  for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Returns an array of all of the song titles.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are song titles.
 */
function getSongTitles(songs) {
  // refactored: one line, anonymous arrow callback function, 
  // implicit return with console.log, no need for curly braces

  // .map method takes in an anonymous arrow callback function
  // returns each 'song's title from 'songs' array in a new array 👇🏼
  // anonymous array //> since we're not storing 'songs.map()' in 
  // a variable, instead 'return'ing the result right away
  return songs.map((song) => song.title);
}

/**
 * Returns an array of all of the song titles with the artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are in the 
 * format "<TITLE> by <ARTIST>".
 *
 * EXAMPLE:
 *  getSongDetails(songs);
 *  //> [ "Berlin Tsukin by Taiyo Ky", "Up by Sebastian Kamae", ... ]
 */
function getSongDetails(songs) {
  // refactored: one line, anonymous arrow callback function, 
  // implicit return with console.log, no need for curly braces

  // .map method takes in an anonymous arrow callback function
  // returns each 'song's title and artist from 'songs' array in a new array 👇🏼
  // anonymous array //> since we're not storing 'songs.map()' in 
  // a variable, instead 'return'ing the result right away
  return songs.map((song) => `${song.title} by ${song.artist}`);
}

/**
 * Returns an array of objects, where each object has a key that is the 
 * song title and has a value that is the song artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 *
 * EXAMPLE:
 *  getTitleAndArtist(songs);
 *  //> [ { "Berlin Tsukin": "Taiyo Ky" }, { Up: "Sebastian Kamae" }, ... ]
 */
function getTitleAndArtist(songs) {
  // opposite of the one line function
  // store the evaluated result of map in a variable, which is 
  // also the name of the new array .map will return at the end
  const arrOfObj = songs.map((song) => {
    // returns an object with title as the key and artist as the value into 'arrOfObj' array
    // directly put key and value into the object, for JS to read 'song.title' put it in square brackets []
    return { [song.title]: song.artist };
  })
  // return 'arrOfObj' new array resulting from .map
  return arrOfObj;
}

module.exports = {
  getSongTitles,
  getSongDetails,
  getTitleAndArtist,
};
