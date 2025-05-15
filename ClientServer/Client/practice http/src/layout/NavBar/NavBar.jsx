import React from "react";
import { Link, NavLink } from "react-router";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            {" "}
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <Link to="getallUsers">AllUsers</Link>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="addusedetails">Add details</NavLink>{" "}
          </li>
          <li> useme</li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
