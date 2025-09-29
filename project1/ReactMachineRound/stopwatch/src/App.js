import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer); 
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  // const formatNumber = (num) => (num < 10 ? `0${num}` : num);

  // const formatTime = (totalSeconds) => {
  //   const hrs = Math.floor(totalSeconds / 3600);
  //   const mins = Math.floor((totalSeconds % 3600) / 60);
  //   const secs = totalSeconds % 60;
  //   return `${formatNumber(hrs)}:${formatNumber(mins)}:${formatNumber(secs)}`;
  // };

  return (
    <div className="App">
      <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{seconds}</h1>
      <button onClick={handleStartPause}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={handleReset} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
    </div>
  );
}

export default App;
