import React, { useState } from "react";

function IncrementButtons () {
  const [oneCount, setOneCount] = useState(0);
  const [twoCount, setTwoCount] = useState(0);
  const [lastPressed, setLastPressed] = useState(null);
  const handleClick = label => {
    setLastPressed(label);
    if (label === 'One') {
      setOneCount(oneCount + 1);
    } else if (label === 'Two') {
      setTwoCount(twoCount + 1);
    }
  }
  return (
    <div>
      <h3>Last Pressed: {lastPressed}</h3>
      <h3>One Count: {oneCount}</h3>
      <h3>Two Count: {twoCount}</h3>
      <button onClick={() => handleClick('One')}>
        One
      </button>
      <button onClick={() => handleClick('Two')}>
        Two
      </button>
    </div>
  );
}

export default IncrementButtons;