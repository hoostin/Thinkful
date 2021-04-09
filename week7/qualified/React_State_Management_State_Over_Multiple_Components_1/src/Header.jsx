import React, { useState } from "react";

function Header (props) {
  const { loggedIn, handleLoggedInClick,fontSize,increaseFontSize } = props;
  
  return (
    <div>
    <button onClick={handleLoggedInClick}>
      {loggedIn ? "Log Out" : "Log In"}
    </button>
    <button onClick={() => increaseFontSize()}>
    FontSize: {fontSize}
  </button>
  </div>
  );
}

export default Header;
