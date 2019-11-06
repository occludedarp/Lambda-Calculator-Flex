import React, {useState} from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";


//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  const [numberState, setNumberState]= useState(numbers);
  return (
    <div>
      {numberState.map((number, index) => (
        <NumberButton digitIs={number} updateDigitTo={setNumberState} key={index}/>
      ))}
    </div>
  );
};

export default Numbers;