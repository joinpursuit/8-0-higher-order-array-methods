const exampleSongData = require("../data/songs");

function sortByRuntimeAscending(songs) {
  return songs.sort((song1, song2) => song1.runtimeInSeconds - song2.runtimeInSeconds);
}

function sortByArtistNameDescending(songs) {
  return songs.sort((song1, song2) => {
    let song1LowCase = song1.artist.toLowerCase();
    let song2LowCase = song2.artist.toLowerCase();
    if(song1LowCase > song2LowCase){
      return -1;
    }
  });
};

function sortBySongTitleAscending(songs) {
  return songs.sort((song1, song2) => {
    let song1LowCase = song1.title.toLowerCase();
    let song2LowCase = song2.title.toLowerCase();
    if(song1LowCase < song2LowCase){
      return -1;
    } 
  });
};

// OMG put > instead of < and put artist instead of title... GRRRRR!!
module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};
