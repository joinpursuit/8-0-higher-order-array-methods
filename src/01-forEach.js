/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const songs = require("../data/songs");
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Logs out all of the song titles.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 */
//  function printAllSongTitles() 
//Medium Length code

//creates a variable to hold printAllSongTitles function with the parameter songs which is an array 
const printAllSongTitles = (songs) => {
  //for each iteration through the songs array console the the title at that iteration 
  songs.forEach((song) => console.log(song.title));
}


/**
 * Logs out the song title and song artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 *
 * EXAMPLE:
 *  printSongDetails(songs);
 *  //> "Berlin Tsukin by Taiyo Ky"
 *  //> "Up by Sebastian Kamae"
 *  //> ...
 */
  // function printSongDetails(songs) {}
  //Medium length code

  //creates a variable to hold the function printSongDetails with the parameter songs which is an array
    const printSongDetails = (songs) => {
      //for each iteration through the array songs console the interpolation of the song title at that iteration by the song artist at that iteration 
      songs.forEach((song) => console.log(`${song.title} by ${song.artist}`))
    }

/**
 * Logs out all of the song titles which have a runtime over three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 */
// function printSongTitlesOverThreeMinutes(songs) {}
//Medium length code

    //create a variable to hold the function printSongTitlesOverThreeMinutes with the parameter songs which is an array 
    const  printSongTitlesOverThreeMinutes = (songs) => {
      //for each iteration through the songs array 
      songs.forEach((song) => {
        //conditional statement if the song runtimeInSeconds at that iteration is greater than or equal to 180
        if (song.runtimeInSeconds >= 180)
        //then console that song title 
        console.log(song.title);
        })
      }

    


module.exports = {
  printAllSongTitles,
  printSongDetails,
  printSongTitlesOverThreeMinutes,
};
