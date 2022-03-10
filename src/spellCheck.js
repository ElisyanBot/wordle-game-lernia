export default function spellCheck(fixedWord, inputWord) {
  let { fix: fixedArr, inp: inputArr } = lettersAtCorrIndex(
    fixedWord,
    inputWord
  );

  //loop
  inputArr.forEach((input) => {
    if (input.result === "correct") return;
    //second loop
    fixedArr.forEach((fixed) => {
      if (input.letter === fixed.letter && fixed.accurate == true) {
        input.result = "incorrect";
      } else if (
        input.letter === fixed.letter &&
        inputArr.indexOf(input) !== fixedArr.indexOf(fixed)
      ) {
        input.result = "misplaced";
      }
    });
  });

  return inputArr;
}


function lettersAtCorrIndex(fixed, input) {
  let inp = [];
  let fix = [];

  for (let i = 0; i < input.length; i++) {
    if (fixed[i] === input[i]) {
      inp.push({ letter: input[i], result: "correct" });
      fix.push({ letter: fixed[i], accurate: true });
    } else {
      inp.push({ letter: input[i], result: "incorrect" });
      fix.push({ letter: fixed[i], accurate: false });
    }
  }

  return { fix, inp };
}
