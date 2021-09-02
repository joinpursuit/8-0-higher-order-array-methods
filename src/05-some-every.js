const exampleSongData = require("../data/songs");

function allSongsAreOverTwoMinutes(songs) {
  return songs.every((song) =>{
    return song > 120;
  });
};

/**
 * Returns `true` if any song is over four minutes. Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */
function anySongIsOverFourMinutes(songs) {}

/**
 * Returns `true` if any song is by the artist "Peanut". Otherwise, return `false`.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {boolean}
 */
function anySongIsByPeanut(songs) {}

module.exports = {
  allSongsAreOverTwoMinutes,
  anySongIsOverFourMinutes,
  anySongIsByPeanut,
};
