//sorting out a random word from an array.
export default function randomizeWord(
  wordArr,
  wordLength = 0,
  multiChars = true
) {
  let filteredArray = [];
  //same length on each word sort
  if (wordLength <= 0) {
    filteredArray = wordArr;
  }

  wordArr.forEach((word) => {
    if (word.length !== wordLength) return;
    filteredArray.push(word);
  });

  if (!!!multiChars) {
    filteredArray = countChars(filteredArray);
  }

  if (filteredArray.length === 0) {
    return console.log(
      "Sorry! we could not find a word that match your requirements"
    );
  }

  return filteredArray[Math.floor(Math.random() * filteredArray.length)];
}

//to sort out the words that only have one repeated letter.
function countChars(arrayOfWords) {
  const singleWordArr = [];
  
  arrayOfWords.forEach((word) => {
    let countedChars = [];
    //check every char in the word if it reapeats
    for (let i = 0; i < word.length; i++) {
      let totalChar = 0;
      for (let j = 0; j < word.length; j++) {
        if (word[i] === word[j]) totalChar++;
      }
      countedChars.push(totalChar);
    }

    let isSingle = true;
    countedChars.forEach((number) => {
      if (number > 1) isSingle = false;
    });
    
    if (isSingle) singleWordArr.push(word);
  });

  //only letting words with char counted once.
  return singleWordArr;
}