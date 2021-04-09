import React from "react";

function Content (props) {
  const { loggedIn,fontSize } = props;
  return loggedIn && <p fontSize ={fontSize}>CONTENT</p>;
}

export default Content;
