import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Clock from "./Clock";
import Stopwatch from "./Stopwatch";
import Timer from "./Timer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/clock" element={<Clock />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </Router>
  );
};

export default App;
