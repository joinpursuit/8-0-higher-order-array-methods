const exampleSongData = require("../data/songs");

function allSongsAreOverTwoMinutes(songs) {
  return songs.every((song) =>{
    return song > 120;
  });
};

function anySongIsOverFourMinutes(songs) {
  return songs.some((song) =>{
    return song > 240;
  });
}

function anySongIsByPeanut(songs) {
  return songs.some((song) =>{
    return song.artist == "Peanut";
  });
};

module.exports = {
  allSongsAreOverTwoMinutes,
  anySongIsOverFourMinutes,
  anySongIsByPeanut,
};
