const generateGrid = (rows, columns, mapper) => {
  return Array(rows)
    .fill()
    .map(() => Array(columns).fill().map(mapper));
};

const checkThree = (a, b, c) => {
  if (!a || !b || !c) return false;
  return a === b && b === c;
};

const checkForWin = (flatGrid) => {
  const [nw, n, ne, w, c, e, sw, s, se] = flatGrid;

  return (
    checkThree(nw, n, ne) ||
    checkThree(w, c, e) ||
    checkThree(sw, s, se) ||
    checkThree(nw, w, sw) ||
    checkThree(n, c, s) ||
    checkThree(ne, e, se) ||
    checkThree(nw, c, se) ||
    checkThree(ne, c, sw)
  );
};

const getInitialState = () => ({
  grid: newTicTacToeGrid(),
  status: "inProgress",
  turn: "X",
});

const clone = (x) => JSON.parse(JSON.stringify(x));

const newTicTacToeGrid = () => generateGrid(3, 3, () => null);

const flatten = (arr) => arr.reduce((acc, cur) => [...acc, ...cur], []);

const checkForDraw = (flatGrid) =>
  !checkForWin(flatGrid) && flatGrid.filter(Boolean).length === flatGrid.length;

const namePlayerMapper = (names, winner) => {
  let message = Object.entries(names)
    .map(([_, value]) => "" + value)
    .join(" - ");

  message += ` 🎉🎉🎉 Winner: ${winner} 🎉🎉🎉`;

  return message;
};

export {
  clone,
  newTicTacToeGrid,
  flatten,
  checkForWin,
  checkForDraw,
  getInitialState,
  namePlayerMapper,
};
