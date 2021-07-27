const {
  sumArray,
  zeroCount,
  plusTen,
  stringsOnly,
  onlyEvens,
  numbersOnly,
  isAllSame,
  isAllOdd,
  targetCount,
  counterObject,
  doubled,
  tripledAndLessThan20,
  divisibleBy,
  numberTimesIdx,
  arePositiveEvenAndNonZeroEnding,
  stringsAndCaps,
} = require("../");

describe("sumArray", () => {
  test("sums an array of numbers", () => {
    expect(sumArray([1, 2, 3])).toBe(6);
    expect(sumArray([])).toBe(0);
    expect(sumArray([13, 2, 5, 5])).toBe(25);
  });
  test("uses forEach", () => {
    const funcString = sumArray.toString();
    expect(
      funcString.includes("forEach") || funcString.includes("reduce")
    ).toBe(true);
    expect(funcString.includes("for(")).toBe(false);
    expect(funcString.includes("while")).toBe(false);
  });
});

describe("zeroCount", () => {
  test("returns the correct number of zeros in an arry", () => {
    expect(zeroCount([1, 2, 3])).toBe(0);
    expect(zeroCount([])).toBe(0);
    expect(zeroCount([13, 0, 5, 0])).toBe(2);
  });
  test("uses forEach", () => {
    const funcString = zeroCount.toString();
    expect(
      funcString.includes("forEach") || funcString.includes("reduce")
    ).toBe(true);
    expect(funcString.includes("for(")).toBe(false);
    expect(funcString.includes("while")).toBe(false);
  });
});

describe("plusTen", () => {
  test("adds ten to every element in array", () => {
    expect(plusTen([1, 2, 3])).toEqual([11, 12, 13]);
    expect(plusTen([])).toEqual([]);
    expect(plusTen([13, 0, 5, 0])).toEqual([23, 10, 15, 10]);
  });
  test("uses map", () => {
    const funcString = plusTen.toString();
    expect(funcString.includes("map") || funcString.includes("reduce")).toBe(
      true
    );
    if (funcString.includes("reduce")) return;
    expect(funcString.includes("forEach")).toBe(false);
    expect(funcString.includes("push")).toBe(false);
    expect(funcString.includes("for(")).toBe(false);
    expect(funcString.includes("while")).toBe(false);
  });
});

describe("stringsOnly", () => {
  test("Only strings left in array. All non strings are converted to empty strings", () => {
    expect(stringsOnly(["a", 123, "b", "c", { name: "cat" }])).toEqual([
      "a",
      "",
      "b",
      "c",
      "",
    ]);
    expect(stringsOnly([])).toEqual([]);
  });
  test("uses map", () => {
    const funcString = stringsOnly.toString();
    expect(funcString.includes("map") || funcString.includes("reduce")).toBe(
      true
    );
    if (funcString.includes("reduce")) return;

    expect(funcString.includes("forEach")).toBe(false);
    expect(funcString.includes("push")).toBe(false);
    expect(funcString.includes("for(")).toBe(false);
    expect(funcString.includes("while")).toBe(false);
  });
});

describe("onlyEvens", () => {
  test("Only even numbers remain", () => {
    expect(onlyEvens([13, 0, 5, 0])).toEqual([0, 0]);
    expect(onlyEvens([1, 2, 3, 4, 5])).toEqual([2, 4]);
    expect(onlyEvens([])).toEqual([]);
  });
  test("uses filter", () => {
    const funcString = onlyEvens.toString();
    expect(funcString.includes("filter") || funcString.includes("reduce")).toBe(
      true
    );
    if (funcString.includes("reduce")) return;

    expect(funcString.includes("forEach")).toBe(false);
    expect(funcString.includes("push")).toBe(false);
    expect(funcString.includes("unshift")).toBe(false);
    expect(funcString.includes("for(")).toBe(false);
    expect(funcString.includes("while")).toBe(false);
  });
});
describe("numbersOnly", () => {
  test("Only numbers remain", () => {
    expect(numbersOnly(["cat", 0, { hi: "corey" }, [], 2, -3])).toEqual([
      0, 2, -3,
    ]);
    expect(numbersOnly(["cat", "dog"])).toEqual([]);
    expect(numbersOnly([1, 2])).toEqual([1, 2]);
    expect(numbersOnly([])).toEqual([]);
  });
  test("uses filter", () => {
    const funcString = numbersOnly.toString();
    expect(funcString.includes("filter") || funcString.includes("reduce")).toBe(
      true
    );
    if (funcString.includes("reduce")) return;

    expect(funcString.includes("forEach")).toBe(false);
    expect(funcString.includes("push")).toBe(false);
    expect(funcString.includes("unshift")).toBe(false);
    expect(funcString.includes("for(")).toBe(false);
    expect(funcString.includes("while")).toBe(false);
  });
});
describe("isAllSame", () => {
  test("determines if all elements are identical", () => {
    expect(isAllSame(["cat", "cat", "cat", "cat"])).toBe(true);
    expect(isAllSame(["cat", "dog"])).toEqual(false);
    expect(isAllSame([0, 0, 0, 0])).toEqual(true);
    expect(isAllSame([0, 0, 0, 1])).toEqual(false);
    expect(isAllSame([])).toBe(true);
  });
  test("uses every", () => {
    const funcString = isAllSame.toString();
    expect(funcString.includes("every") || funcString.includes("reduce")).toBe(
      true
    );
    if (funcString.includes("reduce")) return;

    expect(funcString.includes("forEach")).toBe(false);
    expect(funcString.includes("push")).toBe(false);
    expect(funcString.includes("unshift")).toBe(false);
    expect(funcString.includes("for(")).toBe(false);
    expect(funcString.includes("while")).toBe(false);
  });
});
describe("isAllOdd", () => {
  test("determines if all elements are odd", () => {
    expect(isAllOdd([1, 3, 5, 7])).toEqual(true);
    expect(isAllOdd([0, 1, 3, 2])).toEqual(false);
  });
  test("uses every", () => {
    const funcString = isAllOdd.toString();
    expect(funcString.includes("every") || funcString.includes("reduce")).toBe(
      true
    );
    if (funcString.includes("reduce")) return;

    expect(funcString.includes("forEach")).toBe(false);
    expect(funcString.includes("push")).toBe(false);
    expect(funcString.includes("unshift")).toBe(false);
    expect(funcString.includes("for(")).toBe(false);
    expect(funcString.includes("while")).toBe(false);
  });
});

describe("targetCount", () => {
  test("returns the correct number of target occurrences in an arry", () => {
    expect(targetCount([1, 2, 3], 6)).toBe(0);
    expect(targetCount([], 2)).toBe(0);
    expect(targetCount([13, 0, 5, 5, 0], 5)).toBe(2);
    expect(targetCount([13, 0, 5, 5, 0], 13)).toBe(1);
  });
  test("uses forEach", () => {
    const funcString = targetCount.toString();
    expect(
      funcString.includes("forEach") || funcString.includes("reduce")
    ).toBe(true);
    if (funcString.includes("reduce")) return;

    expect(funcString.includes("for(")).toBe(false);
    expect(funcString.includes("while")).toBe(false);
  });
});

describe("counterObject", () => {
  test("returns a counter object of all occurrences", () => {
    expect(counterObject([1, 1, 2, 1, 3])).toEqual({ 1: 3, 2: 1, 3: 1 });
    expect(counterObject(["cat", "bird", "dog", "cat"])).toEqual({
      cat: 2,
      bird: 1,
      dog: 1,
    });
  });
  test("uses forEach", () => {
    const funcString = targetCount.toString();
    expect(
      funcString.includes("forEach") || funcString.includes("reduce")
    ).toBe(true);
    expect(funcString.includes("for(")).toBe(false);
    expect(funcString.includes("while")).toBe(false);
  });
});

describe("doubled", () => {
  test("doubles all elements in an array", () => {
    expect(doubled([1, 2, 3])).toEqual([2, 4, 6]);
    expect(doubled([20])).toEqual([40]);
  });
  test("uses map", () => {
    const funcString = plusTen.toString();
    expect(funcString.includes("map") || funcString.includes("reduce")).toBe(
      true
    );
    if (funcString.includes("reduce")) return;

    expect(funcString.includes("forEach")).toBe(false);
    expect(funcString.includes("push")).toBe(false);
    expect(funcString.includes("for(")).toBe(false);
    expect(funcString.includes("while")).toBe(false);
  });
});

describe("tripledAndLessThan20", () => {
  test("correctly identifies if the numbers tripled will be less than 20", () => {
    expect(tripledAndLessThan20([1, 2, 4, 7])).toBe(false);
    expect(tripledAndLessThan20([3, 4, 5])).toBe(true);
  });
  test("uses every", () => {
    const funcString = isAllOdd.toString();
    expect(funcString.includes("every") || funcString.includes("reduce")).toBe(
      true
    );
    if (funcString.includes("reduce")) return;

    expect(funcString.includes("forEach")).toBe(false);
    expect(funcString.includes("push")).toBe(false);
    expect(funcString.includes("unshift")).toBe(false);
    expect(funcString.includes("for(")).toBe(false);
    expect(funcString.includes("while")).toBe(false);
  });
});

describe("divisibleBy", () => {
  test("returns all the numbers that divisor evenly goes into", () => {
    expect(divisibleBy(5, [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])).toEqual([
      5, 10, 15,
    ]);
    expect(divisibleBy(3, [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])).toEqual([
      6, 9, 12, 15,
    ]);
  });
  test("uses filter", () => {
    const funcString = numbersOnly.toString();
    expect(funcString.includes("filter") || funcString.includes("reduce")).toBe(
      true
    );
    if (funcString.includes("reduce")) return;

    expect(funcString.includes("forEach")).toBe(false);
    expect(funcString.includes("push")).toBe(false);
    expect(funcString.includes("unshift")).toBe(false);
    expect(funcString.includes("for(")).toBe(false);
    expect(funcString.includes("while")).toBe(false);
  });
});

describe("numberTimesIdx", () => {
  test("returns a new array with each element multiplied by it's index", () => {
    expect(numberTimesIdx([6, 7, 8, 9])).toEqual([0, 7, 16, 27]);
    expect(numberTimesIdx([1, 2, 3])).toEqual([0, 2, 6]);
  });
  test("uses map", () => {
    const funcString = plusTen.toString();
    expect(funcString.includes("map") || funcString.includes("reduce")).toBe(
      true
    );
    if (funcString.includes("reduce")) return;

    expect(funcString.includes("forEach")).toBe(false);
    expect(funcString.includes("push")).toBe(false);
    expect(funcString.includes("for(")).toBe(false);
    expect(funcString.includes("while")).toBe(false);
  });
});

describe("arePositiveEvenAndNonZeroEnding", () => {
  test("returns correct boolean", () => {
    expect(arePositiveEvenAndNonZeroEnding([2, 4, 6, 8, 12])).toBe(true);
    expect(arePositiveEvenAndNonZeroEnding([2, 4, 6, 7, 12])).toBe(false);
    expect(arePositiveEvenAndNonZeroEnding([2, 4, -6, 8, 12])).toBe(false);
    expect(arePositiveEvenAndNonZeroEnding([2, 4, 6, 8, 10])).toBe(false);
  });
  test("uses every", () => {
    const funcString = isAllOdd.toString();
    expect(funcString.includes("every") || funcString.includes("reduce")).toBe(
      true
    );
    if (funcString.includes("reduce")) return;

    expect(funcString.includes("forEach")).toBe(false);
    expect(funcString.includes("push")).toBe(false);
    expect(funcString.includes("unshift")).toBe(false);
    expect(funcString.includes("for(")).toBe(false);
    expect(funcString.includes("while")).toBe(false);
  });
});

describe("stringsAndCaps", () => {
  test("returns only strings and makes them uppercase", () => {
    expect(
      stringsAndCaps([{}, 1, "cat", 3, ["hi"], { name: "dog" }, "dog", "bear"])
    ).toEqual(["CAT", "DOG", "BEAR"]);
    expect(stringsAndCaps(["A", 3, "b"])).toEqual(["A", "B"]);
  });
});
