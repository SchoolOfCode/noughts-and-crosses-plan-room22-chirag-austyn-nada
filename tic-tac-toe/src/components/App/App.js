import { useState } from "react";
import styles from "./App.module.css";
import { calculateWinner } from "../../helper";
import Board from "../Board";

function App() {
  const [board, setBoard] = useState([Array(9).fill(null)]);
  const [isPlayerX, setIsPlayerX] = useState(true);
  const winner = calculateWinner(board);
  const currentPlayer = isPlayerX ? "X" : "O";

  function handleSquareClick(index) {
    if (winner || board[index]) {
      return;
    }
    setBoard([
      ...board.slice(0, index),
      currentPlayer,
      ...board.slice(index + 1),
    ]);
  }

  return (
    <div className={styles.App}>
      <h1>Tic-Tac-Toe</h1>
      <Board onSelectSquare={handleSquareClick} />
    </div>
  );
}

export default App;
