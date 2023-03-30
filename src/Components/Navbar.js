import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import fish from "../Images/fish.jpg";
import "./Navbar.css";
import Dropdown from "./Dropdown";

const isActive = {
  color: "green",
};

const Navbar = () => {
  const [show, setShow] = useState(true);

  const toggle = () => {
    setShow(!show);
  };
  return (
    <div className="navbody">
      <div className="logo">
        <img src={fish} alt="Logo" />
      </div>

      <div className={`links ${show ? null : "mob_nav "}`}>
        <ul>
          <li>
            <NavLink style={isActive} to="/events">
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/research">Research</NavLink>
          </li>
          <li>
            <NavLink to="/partners">Partners</NavLink>
          </li>
          <li>
            <NavLink to="/testimonials">Testimonials</NavLink>
          </li>
          <li>
            <NavLink to="/faq">FAQ</NavLink>
          </li>
        </ul>
      </div>
      <Dropdown />
      <div className="hammenu " onClick={toggle}>
        {show ? (
          <img src="https://mycatch.ca/assets/icons/menu.svg" alt="img" />
        ) : (
          <img src="https://mycatch.ca/assets/icons/close.svg" alt="img" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
