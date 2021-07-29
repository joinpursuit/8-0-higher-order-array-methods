const {
  allSongsAreOverTwoMinutes,
  anySongIsOverFourMinutes,
  anySongIsByPeanut,
} = require("../src/05-some-every");

describe("allSongsAreOverTwoMinutes()", () => {
  let songs;
  beforeEach(() => {
    jest.resetModules();
    songs = require("../data/songs");
  });

  test("should use the `.every()` method", () => {
    const hasEvery = !!allSongsAreOverTwoMinutes
      .toString()
      .match(/\.every(\s*\(|\()/g);
    expect(hasEvery).toBeTruthy();
  });

  test("should return `true` if all of the songs are over two minutes in length (120 seconds), otherwise return `false`", () => {
    const actual = allSongsAreOverTwoMinutes(songs);
    const expected = false;
    expect(actual).toEqual(expected);
  });
});

describe("anySongIsOverFourMinutes()", () => {
  let songs;
  beforeEach(() => {
    jest.resetModules();
    songs = require("../data/songs");
  });

  test("should use the `.some()` method", () => {
    const hasSome = !!anySongIsOverFourMinutes
      .toString()
      .match(/\.some(\s*\(|\()/g);
    expect(hasSome).toBeTruthy();
  });

  test("should return `true` if any song is over four minutes (240 seconds), otherwise return `false`", () => {
    const actual = anySongIsOverFourMinutes(songs);
    const expected = false;
    expect(actual).toEqual(expected);
  });
});

describe("anySongIsByPeanut()", () => {
  let songs;
  beforeEach(() => {
    jest.resetModules();
    songs = require("../data/songs");
  });

  test("should use the `.some()` method", () => {
    const hasSome = !!anySongIsByPeanut.toString().match(/\.some(\s*\(|\()/g);
    expect(hasSome).toBeTruthy();
  });

  test("should return `true` if any song is by the artist 'Peanut', otherwise return `false`", () => {
    const actual = anySongIsByPeanut(songs);
    const expected = true;
    expect(actual).toEqual(expected);
  });
});
