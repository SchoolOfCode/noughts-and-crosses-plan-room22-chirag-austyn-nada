import React, {useState} from "react";
import styles from "./Square.module.css";



function Square(){
const [move, setMove] = useState("") 
  
  // function playerMove(event) {
  //   if (player === 1) { console.log("I'm clicked")
  //   setMove("X");}
  //   else if (player === 1) {
  //     console.log("I'm clicked");
  //     setMove("0");
  //   }

  // }

  function playerMove(event){
    setMove("X")
  }


  return (
    <div className={styles.Square} onClick={playerMove}>
      <h1>{move}</h1>
    </div>
  );
}

export default Square;
