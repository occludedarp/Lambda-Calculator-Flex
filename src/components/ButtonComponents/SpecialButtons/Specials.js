import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";


//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
const [specialsState, setSpecialsState] = useState(specials);
  return (
    <div>
      {specialsState.map((specialSymb, index) => (
        <SpecialButton specialsChar={specialSymb} updateSpecialsTo={setSpecialsState} key={index} />
      ))}
    </div>
  );
};

export default Specials;