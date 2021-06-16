import { Link } from "react-router-dom";

import * as classes from "./Header.module.css";

export const Header = () => (
  <div className={classes.Header}>
    <Link to="/" className={classes.Logo}>
      👾
    </Link>
    <nav>
      <Link to="/play">Play</Link>
      <Link to="/results">Results</Link>
    </nav>
  </div>
);
