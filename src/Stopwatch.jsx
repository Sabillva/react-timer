import React, { useState, useRef } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const toggleStopwatch = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
      alert(`Nəticə: ${time} saniyə`);
    } else {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div>
      <div style={{ fontSize: "2rem", margin: "20px 0" }}>
        {String(Math.floor(time / 3600)).padStart(2, "0")}:
        {String(Math.floor((time % 3600) / 60)).padStart(2, "0")}:
        {String(time % 60).padStart(2, "0")}
      </div>
      <button onClick={toggleStopwatch}>
        {isRunning ? "Dayandır" : "Başlat"}
      </button>
      <button onClick={resetStopwatch}>Sıfırla</button>
    </div>
  );
}

export default Stopwatch;
