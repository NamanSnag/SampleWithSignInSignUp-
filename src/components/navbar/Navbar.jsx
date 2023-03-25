import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./style.scss";

const Navbar = () => {
  const navigate = useNavigate();

  const handleselect = (page) => {
    navigate(page);
  };
  return (
    <div className="navbar">
      <nav className="navContainer">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <div className="logo">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1757/1757025.png"
              alt="logo"
            />
            <p>Naman</p>
          </div>
        </Link>
        <div className="navItems">
          <button
            className="navButton"
            onClick={() => handleselect("/register")}
          >
            Register
          </button>
          <button className="navButton" onClick={() => handleselect("/login")}>
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
