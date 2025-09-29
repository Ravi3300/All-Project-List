import React from "react";
import ReactDOM from "react-dom";



import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);


  const handlePlay = () => {
    setIsPlaying(true);
    setCount(1); // Start from 1
  };

  const handlePause = () =>{
    setIsPlaying(false)
  }

  const handleReset = () =>{
    setCount(0)
    setIsPlaying(false)
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl font-bold">Count: {count}</h1>
      <button
        onClick={handlePlay}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Play
      </button>

      <button
        onClick={handlePause}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Pause
      </button>

      <button
        onClick={handleReset}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Reset
      </button>
    </div>
  );
}

