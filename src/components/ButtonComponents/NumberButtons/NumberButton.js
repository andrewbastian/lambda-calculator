import React from "react";

const NumberButton = (props) => {
  return (
    <button className= "numberBtn">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.calculatorNumbers}
    </button>
  );
};
export default NumberButton
