const {
  printAllSongTitles,
  printSongDetails,
  printSongTitlesOverThreeMinutes,
} = require("../src/01-forEach");

describe("printAllSongTitles()", () => {
  let songs;
  beforeEach(() => {
    jest.resetModules();
    songs = require("../data/songs");
    console.log = jest.fn();
  });

  test("should use the `.forEach()` method", () => {
    const hasForEach = !!printAllSongTitles
      .toString()
      .match(/\.forEach(\s*\(|\()/g);
    expect(hasForEach).toBeTruthy();
  });

  test("should log all of the titles", () => {
    printAllSongTitles(songs);

    expect(console.log).toHaveBeenCalledWith("Berlin Tsukin");
    expect(console.log).toHaveBeenCalledWith("Up");
    expect(console.log).toHaveBeenCalledWith("Daylight");
    expect(console.log).toHaveBeenCalledWith("Dormancy");
    expect(console.log).toHaveBeenCalledWith("Pineapple Jam");
    expect(console.log).toHaveBeenCalledWith("Samui Sunrise");
    expect(console.log).toHaveBeenCalledWith("Regular Guy");
    expect(console.log).toHaveBeenCalledWith("In the Middle of Nowhere");
    expect(console.log).toHaveBeenCalledWith("Pink Elephants");
    expect(console.log).toHaveBeenCalledWith("Kyona");
  });
});

describe("printSongDetails()", () => {
  let songs;
  beforeEach(() => {
    jest.resetModules();
    songs = require("../data/songs");
    console.log = jest.fn();
  });

  test("should use the `.forEach()` method", () => {
    const hasForEach = !!printSongDetails
      .toString()
      .match(/\.forEach(\s*\(|\()/g);
    expect(hasForEach).toBeTruthy();
  });

  test("should print both the title and artist", () => {
    printSongDetails(songs);

    expect(console.log).toHaveBeenCalledWith("Berlin Tsukin by Taiyo Ky");
    expect(console.log).toHaveBeenCalledWith("Up by Sebastian Kamae");
    expect(console.log).toHaveBeenCalledWith("Daylight by hiyasu");
    expect(console.log).toHaveBeenCalledWith("Dormancy by Arcade Portal");
    expect(console.log).toHaveBeenCalledWith("Pineapple Jam by Saib");
    expect(console.log).toHaveBeenCalledWith("Samui Sunrise by Saib");
    expect(console.log).toHaveBeenCalledWith("Regular Guy by Peanut");
    expect(console.log).toHaveBeenCalledWith(
      "In the Middle of Nowhere by Soulaced"
    );
    expect(console.log).toHaveBeenCalledWith("Pink Elephants by Timestreet");
    expect(console.log).toHaveBeenCalledWith("Kyona by Two Sleepy");
  });
});

describe("printSongTitlesOverThreeMinutes()", () => {
  let songs;
  beforeEach(() => {
    jest.resetModules();
    songs = require("../data/songs");
    console.log = jest.fn();
  });

  test("should use the `.forEach()` method", () => {
    const hasForEach = !!printSongTitlesOverThreeMinutes
      .toString()
      .match(/\.forEach(\s*\(|\()/g);
    expect(hasForEach).toBeTruthy();
  });

  test("should only print titles of songs over three minutes (180 seconds)", () => {
    printSongTitlesOverThreeMinutes(songs);

    expect(console.log).toHaveBeenCalledWith("Berlin Tsukin");
    expect(console.log).toHaveBeenCalledWith("Pineapple Jam");
    expect(console.log).toHaveBeenCalledWith("Samui Sunrise");
    expect(console.log).toHaveBeenCalledWith("Regular Guy");
    expect(console.log).toHaveBeenCalledWith("Kyona");
  });
});
