import React, { useState } from "react";
import "./Square.css";

function Square({ onClick, value }) {
  const styles = value ? `squares ${value}` : `squares`;

  return (
    <button className={styles} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
