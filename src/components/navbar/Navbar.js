import React from "react";

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="https://www.kinde.com">
        <img
          className="home-logo"
          src="assets/images/kinde-logo.png"
          alt="Kinde Logo"
        />
      </a>

      <ul className="links">
        <li>
          <a className="link" href="/payments">
            Payments
          </a>
        </li>
        <li>
          <a className="link" href="/faq">
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
