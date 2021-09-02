const exampleSongData = require("../data/songs");

function printAllSongTitles(songs) {
  songs.forEach((song) => {
    console.log(song.title);
  });
}

function printSongDetails(songs) {
  songs.forEach((song) => {
    console.log(`${song.title} by ${song.artist}`);
  });
}

function printSongTitlesOverThreeMinutes(songs) {
  songs.forEach((song) => {
    if (song.runtimeInSeconds > 180) {
      console.log(song.title);
    }
  });
}

module.exports = {
  printAllSongTitles,
  printSongDetails,
  printSongTitlesOverThreeMinutes,
};
