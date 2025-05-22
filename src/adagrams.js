const buildLetterPool = () => {
  const letterPool = {
    'A': 9, 
    'B': 2, 
    'C': 2, 
    'D': 4, 
    'E': 12, 
    'F': 2, 
    'G': 3, 
    'H': 2, 
    'I': 9, 
    'J': 1, 
    'K': 1, 
    'L': 4, 
    'M': 2, 
    'N': 6, 
    'O': 8, 
    'P': 2, 
    'Q': 1, 
    'R': 6, 
    'S': 4, 
    'T': 6, 
    'U': 4, 
    'V': 2, 
    'W': 2, 
    'X': 1, 
    'Y': 2, 
    'Z': 1
  };

  const letterPoolArr = [];

  for (const [letter, qty] of Object.entries(letterPool)){
    for (let i = 0; i < qty; i++){
      letterPoolArr.push(letter);
    }
  }
  return letterPoolArr
}

export const drawLetters = () => {
  const letterPoolArr = buildLetterPool()

  const handSize = 10;
  const hand = []

  for (let i = 0; i < handSize ; i++){
    const randomIndex = Math.floor(Math.random() * letterPoolArr.length);
    const lastPos = letterPoolArr.length - 1;

    [letterPoolArr[lastPos], letterPoolArr[randomIndex]] = [letterPoolArr[randomIndex], letterPoolArr[lastPos]];

    hand.push(letterPoolArr.pop());
  }
  return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let letterCounts = {};
  for (let letter of lettersInHand){
      if (letterCounts[letter]){
        letterCounts[letter] += 1;
      } else {
        letterCounts[letter] = 1
      }
  }

  for (let char of input) {
    if (!letterCounts[char]) return false
    letterCounts[char] -= 1
  }

  return true
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
}; 