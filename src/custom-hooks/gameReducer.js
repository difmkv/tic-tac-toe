import * as actionTypes from "./actionTypes";
import {
  clone,
  flatten,
  checkForWin,
  checkForDraw,
  getInitialState,
} from "../helpers";

const NEXT_TURN = {
  O: "X",
  X: "O",
};

export const gameReducer = (state, action) => {
  if (state.status === "success" && action.type !== actionTypes.RESET) {
    return state;
  }

  switch (action.type) {
    case actionTypes.RESET:
      return getInitialState();

    case actionTypes.CLICK: {
      const { x, y } = action.payload;
      const { grid, turn } = state;

      if (grid[y][x]) {
        return state;
      }

      const nextState = clone(state);

      nextState.grid[y][x] = turn;

      const flatGrid = flatten(nextState.grid);

      if (checkForWin(flatGrid)) {
        nextState.status = "success";

        return nextState;
      }

      if (checkForDraw(flatGrid)) {
        return getInitialState();
      }

      nextState.turn = NEXT_TURN[turn];

      return nextState;
    }

    default:
      return state;
  }
};
