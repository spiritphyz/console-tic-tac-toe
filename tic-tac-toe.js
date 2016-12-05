/*
  The game board is a single array that has 9 positions.
  For each position, the values represent:
   0: no mark
   1: 'x' mark
   2: 'o' mark

   A winning combination looks like:
  [ 1 0 0],
  [ 0 1 0],
  [ 0 0 1],

  winning combinations =
  3 mutiple
  0 3 6 = vertical column 0
  0 4 8 = diagonal from position 0
  1 4 7 = vertical column 1
  2 5 8 = vertical column 2

  2 multiple
  2 4 6 = diagonal from position 2

  1 multiple
  0 1 2 = horizontal row 0
  2 3 4 = horizontal row 1
  5 6 7 = horizontal row 2
*/

let originalBoard = [0, 0, 0,
                     0, 0, 0,
                     0, 0, 0];

const drawBoard = board => {
  let drawing = '';
  let mark = '';
  for (const [index, value] of board.entries()) {
    switch (value) {
    case 0:
      drawing += ' -';
      break;
    case 1:
      drawing += ' x';
      break;
    case 2:
      drawing += ' o';
      break;
    }
    if (index === 2 || 
        index === 5 ||
        index === 8 ) {
      drawing += '\n';
    }
  }
  console.log(drawing);
};

let testBoard = [0, 2, 1,
                 2, 1, 0,
                 1, 2, 0];
drawBoard(testBoard);

// const readline = require('readline');
// let currentAnswer = 'default';

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   currentAnswer = answer;
//   console.log('Thank you for your valuable feedback:', currentAnswer);
//   rl.close();
// });