import React, { useState } from "react";
import Content from "./Content";
import Header from "./Header";

function App () {
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);
  const [fontSize,  setFont] = useState(12);
  const increaseFontSize=() =>  setFont(fontSize+2)
  return (
    <div>
      <Header loggedIn={loggedIn} handleLoggedInClick={toggleLoggedIn} fontSize={fontSize}  increaseFontSize={increaseFontSize}/>
      <Content loggedIn={loggedIn} fontSize={fontSize} />
    </div>
  );
}

export default App;
