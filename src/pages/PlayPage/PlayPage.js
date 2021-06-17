import { useReducer } from "react";
import { useLocation } from "react-router";
import { Redirect } from "react-router-dom";

import { Board, GameOverCta } from "../../components";
import { gameReducer } from "../../custom-hooks";
import { postGameResult } from "../../services";
import { getInitialState, namePlayerMapper } from "../../helpers";
import * as classes from "./PlayPage.module.css";

export function PlayPage() {
  const { state: names } = useLocation();
  const [state, dispatch] = useReducer(gameReducer, getInitialState());
  const { grid, status, turn } = state;

  const handleClick = (x, y) => {
    dispatch({ type: "CLICK", payload: { x, y } });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  if (!names) return <Redirect to="/" />;

  let gameOverCallToAction;

  if (status === "success") {
    postGameResult(namePlayerMapper(names, names[turn]));
    gameOverCallToAction = <GameOverCta winner={names[turn]} reset={reset} />;
  }

  return (
    <div className={classes.PlayPage}>
      <h2>May the odds be ever in your favor!</h2>
      <p>
        ➡️ Next Player {turn}: {names[turn]}
      </p>
      <Board grid={grid} onClick={handleClick} />
      {gameOverCallToAction}
    </div>
  );
}
