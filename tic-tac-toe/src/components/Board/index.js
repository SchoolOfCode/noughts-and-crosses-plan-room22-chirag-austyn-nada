import React from 'react'
import styles from "./Board.module.css"
import Square from "../Square"

function Board() {

  
  return (
    <div className={styles.gameBoard}>
      <Square  className={styles.TopLeft} />
      <Square  className={styles.TopCentre} />
      <Square  className={styles.TopRight} />
      <Square  className={styles.MiddleLeft} />
      <Square  className={styles.MiddleCentre} />
      <Square className={styles.MiddleRight} />
      <Square  className={styles.BottomLeft} />
      <Square  className={styles.BottomCentre} />
      <Square className={styles.BottomRight} />
    </div>
  );
}

export default Board