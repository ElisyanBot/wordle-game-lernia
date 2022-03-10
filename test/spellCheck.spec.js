import spellCheck from "../src/spellCheck.js";

describe('checks that indicator of letter are "true"', () => {
  test('test that the "correct" indictor works', () => {
    const checkedWord = spellCheck("cykla", "cyklå");
    expect(checkedWord[4].result).toBe("incorrect");
  });

  test('test that the "incorrect" indictor works', () => {
    const checkedWord = spellCheck("cykla", "hallå");
    expect(checkedWord[2].result).toBe("incorrect");
    expect(checkedWord[4].result).toBe("incorrect");
  });

  test('test that the "misplaced" indictor works', () => {
    const checkedWord = spellCheck("abborre", "abibrer");
    expect(checkedWord[3].result).toBe("misplaced");
    expect(checkedWord[4].result).not.toBe("misplaced");
  });

  test('test to see if multi letters gets "incorrect" if not needed', () => {
    const checkedWord = spellCheck("baabab", "bbbbbb");
    expect(checkedWord[2].result).toBe("incorrect");
    expect(checkedWord[4].result).toBe("incorrect");
  });
});

describe("testing return value from spellCheck()", () => {
  test("testing the length of returned value", () => {
    const checkedkWord = spellCheck("cykla", "hallå");
    expect(checkedkWord.length).toEqual(5);
  });

  test("test that spellCheck() returns array with objects", () => {
    const checkedWord = spellCheck("txt", "txt");
    expect([
      { letter: "t", result: "correct" },
      { letter: "x", result: "correct" },
      { letter: "t", result: "correct" },
    ]).toEqual(expect.arrayContaining(checkedWord));
  });
});
