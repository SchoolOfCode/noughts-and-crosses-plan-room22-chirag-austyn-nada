import React, {useState} from "react";
import styles from "./App.module.css";
import Board from "../Board";





function App() {
  const [move, setMove] = useState('')


  // function playerMove(x) {
  //   if (x === 0) {
  //     return <p>X</p>;
  //   } else if (x === 1) {
  //     return <p>0</p>;
  //   }
  // }

function playerMove(event){
 setMove("X");
}

console.log(move)

  return (
    <div className={styles.App}>
      <h1>Tic-Tac-Toe</h1>
      <Board />
    </div>
  );
}

export default App;
