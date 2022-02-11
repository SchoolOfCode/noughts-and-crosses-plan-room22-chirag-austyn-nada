import css from  "../Square/Square.module.css"

function Square({ onClick, value }) {
  // const styles = value ? `squares ${value}` : `squares`;
console.log(value)
  return (
    <div className={css.squares} onClick={onClick}>
    
     <p > {value}</p>
  
  </div>);
}

export default Square;
