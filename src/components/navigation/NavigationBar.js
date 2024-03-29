import React, { useState, useEffect } from "react";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

export const NavigationBar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            ADHARVA INSTITUTE OF COMMERCE
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/connect"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Connect
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/more" className="nav-links" onClick={closeMobileMenu}>
                More
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">REGISTER</Button>}
        </div>
      </nav>
    </>
  );
};
