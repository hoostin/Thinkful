import React, { useState } from "react";

function CountButton () {
const [count,setCount] = useState(0);
return <button onClick={() => setCount(count+1)}>Click Count: {count}</button>
}

export default CountButton;