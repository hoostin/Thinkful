import React from "react";
import Roster from "./Roster";

function App() {
  const roster = [
    {firstName: "John", lastName: "Smith", location: "California"},
    {firstName: "April", lastName: "White", location: "Nebraska"},
    {firstName: "Jane", lastName: "Doe", location: "Florida"},
  ];
  return <Roster detailed={true} roster={roster} />;
}

export default App;
