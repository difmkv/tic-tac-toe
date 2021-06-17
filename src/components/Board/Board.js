import { Square } from "../Square/Square";
import * as classes from "./Board.module.css";

export const Board = ({ grid, onClick }) => (
  <div className={classes.Board}>
    {grid.map((row, rowIdx) =>
      row.map((value, colIdx) => (
        <Square
          key={`${colIdx}-${rowIdx}`}
          value={value}
          onClick={() => {
            onClick(colIdx, rowIdx);
          }}
        />
      ))
    )}
  </div>
);
