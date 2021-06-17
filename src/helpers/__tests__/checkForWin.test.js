import { checkForWin, checkForDraw, newTicTacToeGrid } from "../";

test("checkForWin - should check if there's a winner", async () => {
  const winnerGridLiniar = [
    [null, "O", null],
    ["X", "O", "X"],
    ["X", "O", null],
  ];

  const winnerGridDiagonal = [
    ["O", null, "X"],
    ["O", "O", "X"],
    ["X", "X", "O"],
  ];

  const noWinnerGrid = [
    ["O", "O", null],
    [null, null, "X"],
    ["O", "X", null],
  ];

  const draw = [
    ["X", "O", "X"],
    ["X", "O", "O"],
    ["O", "X", "X"],
  ];

  expect(checkForWin(winnerGridLiniar.flat())).toBe(true);
  expect(checkForWin(winnerGridDiagonal.flat())).toBe(true);
  expect(checkForWin(noWinnerGrid.flat())).toBe(false);
  expect(checkForWin(draw.flat())).toBe(false);
});

test("checkForDraw - should check if there's a draw", async () => {
  const draw = [
    ["X", "O", "X"],
    ["X", "O", "O"],
    ["O", "X", "X"],
  ];

  expect(checkForDraw(draw.flat())).toBe(true);
});

test("newTicTacToeGrid - should generate 3x3 tic tac toe grid", async () => {
  const gridOf3x3 = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  expect(newTicTacToeGrid(3, 3)).toEqual(gridOf3x3);
});
