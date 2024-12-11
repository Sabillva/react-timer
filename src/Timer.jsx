import React, { useState, useRef } from "react";

function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startPauseTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    } else {
      if (hours === 0 && minutes === 0 && seconds === 0) {
        alert("Vaxt təyin edilməyib!");
        return;
      }
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else {
            setMinutes((prevMinutes) => {
              if (prevMinutes > 0) {
                setSeconds(59);
                return prevMinutes - 1;
              } else {
                setHours((prevHours) => {
                  if (prevHours > 0) {
                    setMinutes(59);
                    setSeconds(59);
                    return prevHours - 1;
                  } else {
                    clearInterval(intervalRef.current);
                    setIsRunning(false);
                    alert("Vaxt bitdi!");
                    return 0;
                  }
                });
                return 0;
              }
            });
            return 0;
          }
        });
      }, 1000);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setIsRunning(false);
  };

  const adjustTime = (unit, amount) => {
    if (isRunning) return;

    if (unit === "hours") {
      setHours((prev) => Math.max(prev + amount, 0));
    } else if (unit === "minutes") {
      setMinutes((prev) => {
        const newMinutes = prev + amount;
        if (newMinutes >= 60) {
          setHours((h) => h + 1);
          return newMinutes - 60;
        } else if (newMinutes < 0) {
          if (hours > 0) {
            setHours((h) => h - 1);
            return 59;
          }
          return 0;
        }
        return newMinutes;
      });
    } else if (unit === "seconds") {
      setSeconds((prev) => {
        const newSeconds = prev + amount;
        if (newSeconds >= 60) {
          setMinutes((m) => m + 1);
          return newSeconds - 60;
        } else if (newSeconds < 0) {
          if (minutes > 0) {
            setMinutes((m) => m - 1);
            return 59;
          } else if (hours > 0) {
            setHours((h) => h - 1);
            setMinutes(59);
            return 59;
          }
          return 0;
        }
        return newSeconds;
      });
    }
  };

  return (
    <div>
      <div style={{ fontSize: "2rem", margin: "20px 0" }}>
        {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </div>
      {!isRunning && (
        <div>
          <button onClick={() => adjustTime("hours", 1)}>Saat +</button>
          <button onClick={() => adjustTime("hours", -1)}>Saat -</button>
          <button onClick={() => adjustTime("minutes", 1)}>Dəqiqə +</button>
          <button onClick={() => adjustTime("minutes", -1)}>Dəqiqə -</button>
          <button onClick={() => adjustTime("seconds", 1)}>Saniyə +</button>
          <button onClick={() => adjustTime("seconds", -1)}>Saniyə -</button>
        </div>
      )}
      <div>
        <button onClick={startPauseTimer}>
          {isRunning ? "Pauza" : "Başlat"}
        </button>
        <button onClick={resetTimer}>Sıfırla</button>
      </div>
    </div>
  );
}

export default Timer;
