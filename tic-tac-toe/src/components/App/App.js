import React from "react";
import styles from "./App.module.css";
import Board from "../Board";

function App() {
  return (
    <div className={styles.App}>
      <h1>Tic-Tac-Toe</h1>
      <Board />
    </div>
  );
}

export default App;
