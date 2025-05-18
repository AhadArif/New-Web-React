import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="Logo" />
        <span className="brandTitle">⋆♱⋆ Urbex Photography ⋆♱⋆</span>
      </div>

      <div className={`rightSide ${isOpen ? "open" : "close"}`}>
        <div className={`hiddenLinks ${isOpen ? "show" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <button onClick={toggleMenu}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
