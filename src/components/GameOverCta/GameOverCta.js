import { Link } from "react-router-dom";

import * as classes from "./GameOverCta.module.css";

export const GameOverCta = ({ winner, reset }) => {
  return (
    <>
      <h1>🎉 {winner} won!</h1>
      <div className={classes.GameOverCtaContainer}>
        <button onClick={reset} type="button" className="cta">
          Play again
        </button>
        <Link to="/results" className="cta cta--secondary">
          Hall of Fame
        </Link>
      </div>
    </>
  );
};
