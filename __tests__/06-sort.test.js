const {
  sortByRuntimeAscending,
  sortByArtistNameDescending,
  sortBySongTitleAscending,
} = require("../src/06-sort");

describe("sortByRuntimeAscending()", () => {
  let songs;
  beforeEach(() => {
    jest.resetModules();
    songs = require("../data/songs");
  });

  test("should use the `.sort()` method", () => {
    const hasSort = !!sortByRuntimeAscending
      .toString()
      .match(/\.sort(\s*\(|\()/g);
    expect(hasSort).toBeTruthy();
  });

  test("should sort the list by the runtime, with the shortest song first", () => {
    const actual = sortByRuntimeAscending(songs);

    const first = actual[0];
    expect(first).toEqual({
      title: "Up",
      album: "Bluewerks Vol. 1: Up Down Left Right",
      artist: "Sebastian Kamae",
      runtimeInSeconds: 120,
    });

    const last = actual[actual.length - 1];
    expect(last).toEqual({
      title: "Regular Guy",
      album: "Regular Guy",
      artist: "Peanut",
      runtimeInSeconds: 215,
    });
  });
});

describe("sortByArtistNameDescending()", () => {
  let songs;
  beforeEach(() => {
    jest.resetModules();
    songs = require("../data/songs");
  });

  test("should use the `.sort()` method", () => {
    const hasSort = !!sortByArtistNameDescending
      .toString()
      .match(/\.sort(\s*\(|\()/g);
    expect(hasSort).toBeTruthy();
  });

  test("should sort the list by the artist name, with the name latest in the alphabet coming first", () => {
    const actual = sortByArtistNameDescending(songs);

    const first = actual[0];
    expect(first).toEqual({
      title: "Kyona",
      album: "Kyona",
      artist: "Two Sleepy",
      runtimeInSeconds: 188,
    });

    const last = actual[actual.length - 1];
    expect(last).toEqual({
      title: "Dormancy",
      album: "Dormancy",
      artist: "Arcade Portal",
      runtimeInSeconds: 126,
    });
  });
});

describe("sortBySongTitleAscending()", () => {
  let songs;
  beforeEach(() => {
    jest.resetModules();
    songs = require("../data/songs");
  });

  test("should use the `.sort()` method", () => {
    const hasSort = !!sortBySongTitleAscending
      .toString()
      .match(/\.sort(\s*\(|\()/g);
    expect(hasSort).toBeTruthy();
  });

  test("should sort the list by the title name, with the name earliest in the alphabet coming first", () => {
    const actual = sortBySongTitleAscending(songs);

    const first = actual[0];
    expect(first).toEqual({
      title: "Berlin Tsukin",
      album: "Bi-To Te-Pu",
      artist: "Taiyo Ky",
      runtimeInSeconds: 193,
    });

    const last = actual[actual.length - 1];
    expect(last).toEqual({
      title: "Up",
      album: "Bluewerks Vol. 1: Up Down Left Right",
      artist: "Sebastian Kamae",
      runtimeInSeconds: 120,
    });
  });
});
