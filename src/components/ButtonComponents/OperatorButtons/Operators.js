import React, { useState } from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";


//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  const [operatorState, setOperatorState] = useState(operators);

  return (
    <div>
      {operatorState.map((operand, index) => 
        (<OperatorButton operatorChar={operand.char} operatorValue={operand.value} passOperator={setOperatorState} key={index} />)
      )}
    </div>
  );
};

export default Operators;