import React from "react";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Gym_Launch</h1>
      </div>
      <ul>
        <li>
          <Link className="links" to="#header" smooth>
            Header
          </Link>
        </li>
        <li>
          <Link className="links" to="#trainers" smooth>
            Trainers
          </Link>
        </li>
        <li>
          <Link className="links" to="#pricing" smooth>
            Pricing
          </Link>
        </li>
        <li>
          <Link className="links" to="#location" smooth>
            Location
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
