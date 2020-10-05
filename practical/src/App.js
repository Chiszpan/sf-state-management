import React from "react";
import './App.css';
import Vehicle from "./components/Vehicle/Vehicle";
import Example from "./components/Example/Example";

function App() {
  return (
    <>
      <Vehicle speed={50}/>
      <Example/>
    </>
  );
}

export default App;
