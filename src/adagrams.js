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

// const buildLetterPool = () => {
//   const letterPool = {
//     'A': 9, 
//     'B': 2, 
//     'C': 2, 
//     'D': 4, 
//     'E': 12, 
//     'F': 2, 
//     'G': 3, 
//     'H': 2, 
//     'I': 9, 
//     'J': 1, 
//     'K': 1, 
//     'L': 4, 
//     'M': 2, 
//     'N': 6, 
//     'O': 8, 
//     'P': 2, 
//     'Q': 1, 
//     'R': 6, 
//     'S': 4, 
//     'T': 6, 
//     'U': 4, 
//     'V': 2, 
//     'W': 2, 
//     'X': 1, 
//     'Y': 2, 
//     'Z': 1
//   };

//   const letterPoolArr = [];

//   for (const [letter, qty] of Object.entries(letterPool)){
//     for (let i = 0; i < qty; i++){
//       letterPoolArr.push(letter);
//     }
//   }
//   return letterPoolArr
// }

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
  let handMap = {};

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

};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
}; 