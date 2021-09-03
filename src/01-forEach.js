/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Logs out all of the song titles.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 */
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
function printAllSongTitles(songs) {
  songs.forEach(song=>{
    console.log(song.title)
  })
}
//printAllSongTitles(songs)
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
function printSongDetails(songs) {
  songs.forEach(song=>{
    console.log(song.title +" by "+song.artist)
  })
}
//printSongDetails(songs)
/**
 * Logs out all of the song titles which have a runtime over three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 */
function printSongTitlesOverThreeMinutes(songs) {
  songs.forEach(song=>{(song.runtimeInSeconds > 180);{
      console.log(song.title);
    }
  })
}

module.exports = {
  printAllSongTitles,
  printSongDetails,
  printSongTitlesOverThreeMinutes,
};
