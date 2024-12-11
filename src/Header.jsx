import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/clock" className="menu-item">
        Saat
      </Link>
      <Link to="/stopwatch" className="menu-item">
        Saniyəölçən
      </Link>
      <Link to="/timer" className="menu-item">
        Taymer
      </Link>
    </div>
  );
};

export default Header;
