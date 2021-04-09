import React from "react";

function ClickTimes ({addTimestamp}) {
  
    return (
        <div>
        <button onClick={() => addTimestamp()}>
         click me
        </button>
      </div>
      );
}

export default ClickTimes;
