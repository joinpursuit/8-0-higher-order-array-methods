/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/* Returns an array of all songs by the artist "Saib".
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */
//filter the songs
//return saib's songs
//the final array shall contain all the Saib songs from the song collection and none of  the non Saib songs
function getSongsBySaib(songs) {
  let songBySaib = songs.filter((song) => {
    if (song.artist === "Saib") {
      return song;
    }
  });

  return songBySaib;
}

/**
 * Returns an array of all songs where the runtime is over three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */

function getSongsOverThreeMinutes(songs) {
  let moreThan = songs.filter((song) => {
    if (song.runtimeInSeconds > 180) {
      return song;
    }
  });

  return moreThan;
}

/**
 * Returns an array of songs where the song title is the same as the song album.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */
function getTitleTracks(songs) {
  let byTrack = songs.filter((song) => {
    if (song.title === song.album) {
      return song;
    }
  });
  return byTrack;
}

module.exports = {
  getSongsBySaib,
  getSongsOverThreeMinutes,
  getTitleTracks,
};
