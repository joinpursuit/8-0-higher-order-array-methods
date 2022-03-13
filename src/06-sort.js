/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const songs = require("../data/songs");
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Reorders the array so that the song objects are organized by their runtime. The shortest song should come first.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
// function sortByRuntimeAscending(songs) {

  // return songs.sort((a,b) => a.runtimeInSeconds - b.runtimeInSeconds)
// 

const sortByRuntimeAscending = (songs) => songs.sort((a,b) => a.runtimeInSeconds - b.runtimeInSeconds
)

/**
 * Reorders the array so that the song objects are organized by their artist name. The artist that comes last in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
// function sortByArtistNameDescending(songs) {
//   return songs.sort((a,b) => b.artist - a.artist)
// }
//create a function to sort artist name by descending order with the parameter songs which is an array
const sortByArtistNameDescending = (songs) =>{
  //using the sort method returns the comparison of iteration a (start) and iteration b(end)
  return songs.sort((a,b) => {
    //conditional statement if start iteration in uppper case form is greater than end iteration in upper case form
    if(a.artist.toUpperCase() > b.artist.toUpperCase()){
      //return negative 1 and put that one first
      return -1
    }
  }) 

}

// const sortByArtistNameDescending = songs.sort((a, b) => {
//   if (a.artist < b.artist)return -1;
//     return 1;
// });



/**
 * Reorders the array so that the song objects are organized by their song title. The title that comes first in the alphabet should come first.
 *
 * TIP: "A" and "a" sort differently. To avoid this issue, you may want to use `.toLowerCase()` or `.toUpperCase()`.
 *
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]}
 */
// function sortBySongTitleAscending(songs) {
//   return songs.sort((a,b) => a.title - b.title)
// }

//create a funtion to sort songs by title in ascending order (alphabetical order) with the parameter songs which is an array
const sortBySongTitleAscending = (songs) => { 
  //using the .sort method and element 1 and element 2 as start and end point return the following 
return songs.sort((el1, el2) => {
  //if element 1 in songs iterarion title in lower case form is less than element 2 in lower case form 
  if (el1.title.toLowerCase() < el2.title.toLowerCase()){
    //return -1 and put that element first
    return -1;
  }
})


}



module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};
