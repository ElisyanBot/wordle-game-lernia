import randomizeWord from "../src/randomizeWord.js";
let testArray;

describe("testing the returned value of randomizeWord()", () => {
  test("lenght of returned word", () => {
    let word = randomizeWord(testArray, 4, 1);
    expect(word.length).toBe(4);
  });

  test("length of total letters in returned word", () => {
    let word = randomizeWord(["alla", "cykla", "hallå"], 5, false);

    const countedChars = [];
    for (let i = 0; i < word.length; i++) {
      let totalChar = 0;
      for (let j = 0; j < word.length; j++) {
        if (word[i] === word[j]) totalChar++;
      }
      countedChars.push({ letter: word[i], total: totalChar });
    }

    //checking each letters totalt count
    countedChars.forEach((letter) => {
      expect(letter.total).toEqual(1);
    });
  });
});



testArray = [
  "the",
  "be",
  "to",
  "of",
  "and",
  "in",
  "that",
  "have",
  "it",
  "for",
  "not",
  "on",
  "with",
  "he",
  "as",
  "you",
  "do",
  "at",
  "this",
  "but",
  "his",
  "by",
  "from",
  "they",
  "we",
  "say",
  "her",
  "she",
  "or",
  "an",
  "will",
  "my",
  "one",
  "all",
  "would",
  "there",
  "their",
  "what",
  "so",
  "up",
  "out",
  "if",
  "about",
  "who",
  "get",
  "which",
  "go",
  "me",
  "when",
  "make",
  "can",
  "like",
  "time",
  "no",
  "just",
  "him",
  "know",
  "take",
  "person",
  "into",
  "year",
  "your",
  "good",
  "some",
  "could",
  "them",
  "see",
  "other",
  "than",
  "then",
  "now",
  "look",
  "only",
  "come",
  "its",
  "over",
  "think",
  "also",
  "back",
  "after",
  "use",
  "two",
  "how",
  "our",
  "work",
  "first",
  "well",
  "way",
  "even",
  "new",
  "want",
  "because",
  "any",
  "these",
  "give",
  "day",
  "most",
  "us",
];
