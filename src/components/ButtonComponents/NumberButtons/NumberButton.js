import React from "react";

const NumberButton = (props) => {
  return (
    <button>
      {props.digitIs}
    </button>
  );
};

export default NumberButton;