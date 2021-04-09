import React from "react";
import { fontFamily } from "styled-system";
import "./App.css";
import React from "react";
function App() {
  const helloStyle = { 
    textAlign: "center"
  };
  return (
    <div style={helloStyle} >
      <h1 style = {{fontFamily: "cursive"}}>Hello!</h1>
      <h4 style= {{fontFamily: "monospace"}}>How are you?</h4>
      <h5 className = "App-weather-message">Today is a nice day!</h5>
    </div>
  );
}

export default App;
