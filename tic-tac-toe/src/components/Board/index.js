import React from "react";
import styles from "./Board.module.css";
import Square from "../Square";


function Board  ({ squares,  onSelectSquare }) { 
  console.log(squares)
   return (
  <div className={styles.board}>

    {squares.map(function map(square, index)  {
      console.log(index)
      console.log(square)
      return (<Square
        key={index}
        value={square}
        onClick={() => onSelectSquare(index)}
      />
    )})}
      
  </div>
   )};
export default Board;
