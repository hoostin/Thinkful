import React, { useState } from "react";
import ClickTimes from "./ClickTimes";
import TimestampsDisplay from "./TimestampsDisplay";

function App() {
  const [timestamps,setTimestamp] = useState([]);
  // const {timestamps,setTimestamp} = props;
  const addTimestamp =() => setTimestamp([...timestamps,Date.now()])
  return <div>
    <ClickTimes addTimestamp={addTimestamp}></ClickTimes>
  <TimestampsDisplay timestamps={timestamps} />;
  </div>
}

export default App;
