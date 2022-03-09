/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Returns an array of all of the song titles.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are song titles.
 */
const getSongTitles = (songs) => songs.map((song) => song.title);

// METHOD TWO:
// const getSongTitles = (songs) => {
//   return songs.map((song) => song.title);
// }

// NOTE: {"return..."} is necessary after => when more than one-line is used.

/**
 * Returns an array of all of the song titles with the artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are in the format "<TITLE> by <ARTIST>".
 *
 * EXAMPLE:
 *  getSongDetails(songs);
 *  //> [ "Berlin Tsukin by Taiyo Ky", "Up by Sebastian Kamae", ... ]
 */
const getSongDetails = (songs) => {
  return songs.map((song) => `${song.title} by ${song.artist}`);
}

/**
 * Returns an array of objects, where each object has a key that is the song title and has a value that is the song artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 *
 * EXAMPLE:
 *  getTitleAndArtist(songs);
 *  //> [ { "Berlin Tsukin": "Taiyo Ky" }, { Up: "Sebastian Kamae" }, ... ]
 */
const getTitleAndArtist = (songs) => {
  const titleWithArtist = songs.map((song) => {
    return { [song.title]: song.artist };
  })
  return titleWithArtist;
}

// FROM LESSON ON 03/07/2022: 
// const comics = [
//   { title: "Calvin & Hobbes", author: "Bill Watterson", kind: "print" },
//   { title: "Zen Pencils", author: "Gavin Aung Than", kind: "web" },
//   { title: "Nancy", author: "Olivia James", kind: "print" },
//   { title: "False Knees", author: "Joshua Barkman", kind: "web" },
// ];
// let reviews = [
// "Was amazing", 
// "Is the best thing EVER", 
// "Is such a good comic!", 
// " - GET THIS COMIC!", 
// " I. CAN'T. EVEN.", 
// "is truly a masterpice of the genre"
// ];

// const makeFakeReviews = (comics, reviews) => {
// return comics.map(comic => `${comic.title} ${reviews[Math.floor(Math.random() * reviews.length)]}`)
// } 

module.exports = {
  getSongTitles,
  getSongDetails,
  getTitleAndArtist,
};
