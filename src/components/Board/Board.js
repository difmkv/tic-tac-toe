import { Square } from "../Square/Square";
import * as classes from "./Board.module.css";

export const Board = ({ squares, onClick }) => (
  <div className={classes.Board}>
    {squares.map((row, rowIdx) =>
      row.map((value, colIdx) => (
        <Square
          key={`${colIdx}-${rowIdx}`}
          onClick={() => {
            onClick(colIdx, rowIdx);
          }}
          value={value}
        />
      ))
    )}
  </div>
);
