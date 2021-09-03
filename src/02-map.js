/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.


const songs = [
  {
    title: "Berlin Tsukin",
    album: "Bi-To Te-Pu",
    artist: "Taiyo Ky",
    runtimeInSeconds: 193,
  },
  {
    title: "Up",
    album: "Bluewerks Vol. 1: Up Down Left Right",
    artist: "Sebastian Kamae",
    runtimeInSeconds: 120,
  },
  {
    title: "Daylight",
    album: "Bluewerks Vol. 1: Up Down Left Right",
    artist: "hiyasu",
    runtimeInSeconds: 154,
  },
  {
    title: "Dormancy",
    album: "Dormancy",
    artist: "Arcade Portal",
    runtimeInSeconds: 126,
  },
  {
    title: "Pineapple Jam",
    album: "Bluewerks Vol. 1: Up Down Left Right",
    artist: "Saib",
    runtimeInSeconds: 186,
  },
  {
    title: "Samui Sunrise",
    album: "Samui Sunrise",
    artist: "Saib",
    runtimeInSeconds: 204,
  },
  {
    title: "Regular Guy",
    album: "Regular Guy",
    artist: "Peanut",
    runtimeInSeconds: 215,
  },
  {
    title: "In the Middle of Nowhere",
    album: "It's OK",
    artist: "Soulaced",
    runtimeInSeconds: 123,
  },
  {
    title: "Pink Elephants",
    album: "Waterfalls",
    artist: "Timestreet",
    runtimeInSeconds: 171,
  },
  {
    title: "Kyona",
    album: "Kyona",
    artist: "Two Sleepy",
    runtimeInSeconds: 188,
  },
];

/**
 * Returns an array of all of the song titles.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are song titles.
 */
function getSongTitles(songs) {
  const titles = songs.map(song=>{
    return song.title;
  })

//console.log(titles)
return titles;
}
/**
 * Returns an array of all of the song titles with the artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are in the format "<TITLE> by <ARTIST>".
 *
 * EXAMPLE:
 *  getSongDetails(songs);
 *  //> [ "Berlin Tsukin by Taiyo Ky", "Up by Sebastian Kamae", ... ]
 */
function getSongDetails(songs) {
  const titleByArtist = songs.map(song=>{
    return song.title + " by "+ song.artist;
  })
  return titleByArtist;
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
function getTitleAndArtist(songs) {
  const obj = songs.map((song)=>{
    let returnObj={};
      returnObj[song.title] = song.artist
      return returnObj;
    });
  
  console.log(obj);
  return obj;
}
//console.log(getTitleAndArtist(songs))

module.exports = {
  getSongTitles,
  getSongDetails,
  getTitleAndArtist,
};
