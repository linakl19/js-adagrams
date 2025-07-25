const LETTER_POOL = {
    'A': {
      'qty': 9,
      'points': 1
    }, 
    'B': {
      'qty': 2,
      'points': 3
    },  
    'C': {
      'qty': 2,
      'points': 3
    },  
    'D': {
      'qty': 4,
      'points': 2
    },  
    'E': {
      'qty': 12,
      'points': 1
    },  
    'F': {
      'qty': 2,
      'points': 4
    },  
    'G': {
      'qty': 3,
      'points': 2
    },  
    'H': {
      'qty': 2,
      'points': 4
    },  
    'I': {
      'qty': 9,
      'points': 1
    },  
    'J': {
      'qty': 1,
      'points': 8
    },  
    'K': {
      'qty': 1,
      'points': 5
    },  
    'L': {
      'qty': 4,
      'points': 1
    },  
    'M': {
      'qty': 2,
      'points': 3
    },  
    'N': {
      'qty': 6,
      'points': 1
    },  
    'O': {
      'qty': 8,
      'points': 1
    },  
    'P': {
      'qty': 2,
      'points': 3
    },  
    'Q': {
      'qty': 1,
      'points': 10
    },  
    'R': {
      'qty': 6,
      'points': 1
    },  
    'S': {
      'qty': 4,
      'points': 1
    },  
    'T': {
      'qty': 6,
      'points': 1
    },  
    'U': {
      'qty': 4,
      'points': 1
    },  
    'V': {
      'qty': 2,
      'points': 4
    },  
    'W': {
      'qty': 2,
      'points': 4
    },  
    'X': {
      'qty': 1,
      'points': 8
    },  
    'Y': {
      'qty': 2,
      'points': 4
    },  
    'Z': {
      'qty': 1,
      'points': 10
    }, 
  };

const buildLetterPool = (pool) => {
  const letterPoolArr = [];

  for (const [letter, value] of Object.entries(pool)){
    for (let i = 0; i < value.qty; i++){
      letterPoolArr.push(letter);
    }
  }
  return letterPoolArr
}

export const drawLetters = () => {
  const letterPoolArr = buildLetterPool(LETTER_POOL)

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
  const handMap = {};

  for (const letter of lettersInHand) {
    handMap[letter] = (handMap[letter] || 0) + 1;
  }

  for (const char of input) {
    const upperChar = char.toUpperCase();
    if (!handMap[upperChar]) return false;
    handMap[upperChar] -= 1;
  }

  return true
};

export const scoreWord = (word) => {
  let totalPoints = 0;
  if (!word) return totalPoints;

  const upperWord = word.toUpperCase();

  for (const char of upperWord){
    totalPoints += LETTER_POOL[char]?.points || 0;
  }

  const bonusPointsForLength = 8;
  if (upperWord.length >= 7) {
    totalPoints += bonusPointsForLength;
  }

  return totalPoints
};

const breakTie = (word, winnerWord) => {
  const winnerUsedAllLetters = winnerWord.length === 10;
  const wordUsedAllLetters = word.length === 10;

  if (wordUsedAllLetters && !winnerUsedAllLetters) return word;
  if (!wordUsedAllLetters && !winnerUsedAllLetters && word.length < winnerWord.length) return word;

  return winnerWord;
};

export const highestScoreFrom = (words) => {
  let winnerWord = null;
  let winnerScore = 0;

  for (const word of words){
    const wordScore = scoreWord(word);

    if (wordScore > winnerScore) {
      winnerWord = word;
      winnerScore = wordScore;
    } 
    else if (wordScore === winnerScore) {
      const chosenWord = breakTie(word, winnerWord);
      if (chosenWord !== winnerWord) {
        winnerWord = word;
        winnerScore = wordScore;
      }
    }
  }

  return {
    word: winnerWord,
    score: winnerScore,
  };
}; 