import React from "react";
import styles from "./Board.module.css";
import Square from "../Square";

const Board = ({ squares, onSelectSquare }) => (
  <div className={styles.board}>
    {squares.map((square, index) => (
      <Square
        key={index}
        value={square}
        onClick={() => onSelectSquare(index)}
      />
    ))}
  </div>
);
export default Board;
