const {
  getSongTitles,
  getSongDetails,
  getTitleAndArtist,
} = require("../src/02-map");

describe("getSongTitles()", () => {
  let songs;
  beforeEach(() => {
    jest.resetModules();
    songs = require("../data/songs");
  });

  test("should use the `.map()` method", () => {
    const hasMap = !!getSongTitles.toString().match(/\.map(\s*\(|\()/g);
    expect(hasMap).toBeTruthy();
  });

  test("should return an array of all song titles", () => {
    const actual = getSongTitles(songs);
    const expected = [
      "Berlin Tsukin",
      "Up",
      "Daylight",
      "Dormancy",
      "Pineapple Jam",
      "Samui Sunrise",
      "Regular Guy",
      "In the Middle of Nowhere",
      "Pink Elephants",
      "Kyona",
    ];
    expect(actual).toEqual(expected);
  });
});

describe("getSongDetails()", () => {
  let songs;
  beforeEach(() => {
    jest.resetModules();
    songs = require("../data/songs");
  });

  test("should use the `.map()` method", () => {
    const hasMap = !!getSongDetails.toString().match(/\.map(\s*\(|\()/g);
    expect(hasMap).toBeTruthy();
  });

  test("should return an array with the song title and artist", () => {
    const actual = getSongDetails(songs);
    const expected = [
      "Berlin Tsukin by Taiyo Ky",
      "Up by Sebastian Kamae",
      "Daylight by hiyasu",
      "Dormancy by Arcade Portal",
      "Pineapple Jam by Saib",
      "Samui Sunrise by Saib",
      "Regular Guy by Peanut",
      "In the Middle of Nowhere by Soulaced",
      "Pink Elephants by Timestreet",
      "Kyona by Two Sleepy",
    ];
    expect(actual).toEqual(expected);
  });
});

describe("getTitleAndArtist()", () => {
  let songs;
  beforeEach(() => {
    jest.resetModules();
    songs = require("../data/songs");
  });

  test("should use the `.map()` method", () => {
    const hasMap = !!getTitleAndArtist.toString().match(/\.map(\s*\(|\()/g);
    expect(hasMap).toBeTruthy();
  });

  test("should return an array of objects where the key is the song title and the value is the song artist", () => {
    const actual = getTitleAndArtist(songs);
    const expected = [
      { "Berlin Tsukin": "Taiyo Ky" },
      { Up: "Sebastian Kamae" },
      { Daylight: "hiyasu" },
      { Dormancy: "Arcade Portal" },
      { "Pineapple Jam": "Saib" },
      { "Samui Sunrise": "Saib" },
      { "Regular Guy": "Peanut" },
      { "In the Middle of Nowhere": "Soulaced" },
      { "Pink Elephants": "Timestreet" },
      { Kyona: "Two Sleepy" },
    ];
    expect(actual).toEqual(expected);
  });
});
