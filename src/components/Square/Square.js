import * as classes from "./Square.module.css";

export const Square = ({ value, onClick }) => {
  const style = value ? `${classes.Square} ${value}` : `${classes.Square}`;

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};
