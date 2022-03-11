//sorting out a random word from an array.
export default function randomizeWord(wordArr, wordLength, multiChars = true) {
  let sameLengthArr = [];
  //same length on each word sort
  wordArr.forEach((word) => {
    if (word.length !== wordLength) return;
    sameLengthArr.push(word);
  });

  if (!!!multiChars) {
    sameLengthArr = countChars(sameLengthArr);
  }

  return sameLengthArr[Math.floor(Math.random() * sameLengthArr.length)];
}

//to sort out the words that only have one repeated letter.
function countChars(arrayOfWords) {
  const singleWordArr = [];
  arrayOfWords.forEach((word) => {
    //check every char in the word if it reapeats
    let countedChars = [];
    for (let i = 0; i < word.length; i++) {
      let totalChar = 0;
      for (let j = 0; j < word.length; j++) {
        if (word[i] === word[j]) totalChar++;
      }
      countedChars.push(totalChar);
    }

    //only letting words with char counted once.
    let isSingle = true;
    countedChars.forEach((number) => {
      if (number > 1) isSingle = false;
    });

    if (isSingle) singleWordArr.push(word);
  });
  return singleWordArr;
}
