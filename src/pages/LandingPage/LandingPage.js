import { useState } from "react";
import { useHistory } from "react-router-dom";

import * as classes from "./LandingPage.module.css";
import { Input } from "../../components";

export const LandingPage = () => {
  const history = useHistory();
  const [X, setX] = useState("");
  const [O, setO] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push({
      pathname: "/play",
      state: { X, O },
    });
  };

  return (
    <div className={classes.LandingPage}>
      <h1>Meet of Champions</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Player 𝗫"
          type="text"
          placeholder="Captain Anonymous"
          value={X}
          onChange={(e) => setX(e.target.value)}
          required
        />
        <Input
          label="Player ⃝"
          type="text"
          placeholder="Pirate Anonymous"
          value={O}
          onChange={(e) => setO(e.target.value)}
          required
        />

        <button type="submit" className="cta">
          Let's Play
        </button>
      </form>
    </div>
  );
};
