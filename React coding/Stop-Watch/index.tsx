"use client";
import React from "react";
import { useStopwatch } from "./useStopwatch";

const formatTime = (totalSeconds: number): string => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};
const formatTime2 = (s: any) =>
  new Date(s * 1000).toISOString().substring(11, 19);

const Stopwatch: React.FC = () => {
  const { seconds, start, stop, reset } = useStopwatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Stopwatch</h1>

      <h2>{formatTime(seconds)}</h2>

      <button onClick={start}>Start</button>
      <button onClick={stop} style={{ margin: "0 10px" }}>
        Stop
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Stopwatch;

