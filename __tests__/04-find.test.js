const {
  findPinkElephantsByTimestreet,
  findFirstSongUnderThreeMinutes,
  findFirstTitleTrack,
} = require("../src/04-find");

describe("findPinkElephantsByTimestreet()", () => {
  let songs;
  beforeEach(() => {
    jest.resetModules();
    songs = require("../data/songs");
  });

  test("should use the `.find()` method", () => {
    const hasFind = !!findPinkElephantsByTimestreet
      .toString()
      .match(/\.find(\s*\(|\()/g);
    expect(hasFind).toBeTruthy();
  });

  test("should return the song Pink Elephants by Timestreet", () => {
    const actual = findPinkElephantsByTimestreet(songs);
    const expected = {
      title: "Pink Elephants",
      album: "Waterfalls",
      artist: "Timestreet",
      runtimeInSeconds: 171,
    };
    expect(actual).toEqual(expected);
  });
});

describe("findFirstSongUnderThreeMinutes()", () => {
  let songs;
  beforeEach(() => {
    jest.resetModules();
    songs = require("../data/songs");
  });

  test("should use the `.find()` method", () => {
    const hasFind = !!findFirstSongUnderThreeMinutes
      .toString()
      .match(/\.find(\s*\(|\()/g);
    expect(hasFind).toBeTruthy();
  });

  test("should return the first song in the array that is under three minutes (180 seconds)", () => {
    const actual = findFirstSongUnderThreeMinutes(songs);
    const expected = {
      title: "Up",
      album: "Bluewerks Vol. 1: Up Down Left Right",
      artist: "Sebastian Kamae",
      runtimeInSeconds: 120,
    };
    expect(actual).toEqual(expected);
  });
});

describe("findFirstTitleTrack()", () => {
  let songs;
  beforeEach(() => {
    jest.resetModules();
    songs = require("../data/songs");
  });

  test("should use the `.find()` method", () => {
    const hasFind = !!findFirstTitleTrack.toString().match(/\.find(\s*\(|\()/g);
    expect(hasFind).toBeTruthy();
  });

  test("should return the first song in the array where the title matches the album", () => {
    const actual = findFirstTitleTrack(songs);
    const expected = {
      title: "Dormancy",
      album: "Dormancy",
      artist: "Arcade Portal",
      runtimeInSeconds: 126,
    };
    expect(actual).toEqual(expected);
  });
});
