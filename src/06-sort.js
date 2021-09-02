const exampleSongData = require("../data/songs");

function sortByRuntimeAscending(songs) {
  return songs.sort(
    (song1, song2) => song1.runtimeInSeconds - song2.runtimeInSeconds
  );
}

function sortByArtistNameDescending(songs) {
  return songs.sort((song1, song2) => {
    if (song1.artist.toLowerCase() > song2.artist.toLowerCase()) {
      return -1;
    }
  });
}

function sortBySongTitleAscending(songs) {
  return songs.sort((song1, song2) => {
    if (song1.title.toLowerCase() < song2.title.toLowerCase()) {
      return -1;
    }
  });
}


// OMG put > instead of < and put artist instead of title... GRRRRR!!
module.exports = {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
};
