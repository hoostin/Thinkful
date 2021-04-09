import React from "react";
import Clock from "./Clock";

function App({loggedIn}) {
    if(loggedIn)
    return (
        <div>
          <Clock />
        </div>
      );
}

export default App;
