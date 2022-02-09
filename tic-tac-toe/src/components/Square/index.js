import React, {useState} from "react";
import styles from "./Square.module.css";



function Square(){
const [move, setMove] = useState("") 
  
  function playerMove(event) {
    console.log("I'm clicked")
    setMove("X");
  }


  return (
    <div className={styles.Square} onClick={playerMove}>
      {move}
    </div>
  );
}

export default Square;
