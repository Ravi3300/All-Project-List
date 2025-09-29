import React from "react";
import ReactDOM from "react-dom";
import { useState, useMemo } from "react";

import "./styles.css";

function App() {
 const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  // useMemo will cache the result unless 'number' changes
  const squaredNumber = useMemo(() => {
    console.log("Calculating square...");
    return number * number;
  }, [number]);


  return (
    <div>
      <h2>useMemo Example</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        placeholder="Enter a number"
      />
      <p>Square: {squaredNumber}</p>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>You typed: {text}</p>
    </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
