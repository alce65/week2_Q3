const board = [
  [1, 0, 0, 1],
  [0, 1, 1, 0],
  [0, 0, 1, 0],
];

// 1 0 0 1
// 0 1 1 0
// 0 0 1 0

const i = 0;
const j = 0;
const maxI = 3;
const maxJ = 4;

// Acceso a las posiciones: board[i][j]

// eslint-disable-next-line no-unused-vars
const posiblePositions = [
  [[i - 1], [j - 1]],
  [[i - 1], [j]],
  [[i - 1], [j + 1]],
  [[i], [j - 1]],
  [[i], [j + 1]],
  [[i + 1], [j - 1]],
  [[i + 1], [j]],
  [[i + 1], [j + 1]],
].filter(([x, y]) => x >= 0 && y >= 0 && x < maxI && y < maxJ && [x, y]);

// eslint-disable-next-line no-unused-vars
const neighbors = [
  board[i - 1][j - 1],
  board[i - 1][j],
  board[i - 1][j + 1],
  board[i][j - 1],
  board[i][j + 1],
  board[i + 1][j - 1],
  board[i + 1][j],
  board[i + 1][j + 1],
].reduce((a, b) => a + b);
