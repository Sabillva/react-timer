import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <h1>{time.getHours().toString().padStart(2, "0")}</h1>
      <h1>:</h1>
      <h1>{time.getMinutes().toString().padStart(2, "0")}</h1>
      <h1>:</h1>
      <h1>{time.getSeconds().toString().padStart(2, "0")}</h1>
    </div>
  );
};

export default Clock;
