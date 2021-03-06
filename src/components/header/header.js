import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        CONNECT UG
      </Link>
      <div onClick={handleClick} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div>
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/map" className="nav-link" onClick={closeMenu}>
            Map
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
