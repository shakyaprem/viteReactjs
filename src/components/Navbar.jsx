import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarNav } from '../styles/Styled.Components';

const Navbar = () => {
  const [active, setActive] = useState("navbar-list");
  const [icon, setIcon] = useState("nav-toggle");
  const navToggle = () => {
    if (active === "navbar-list") {
      setActive("navbar-list nav-active");
    } else setActive("navbar-list");

    if (icon === "nav-toggle") {
      setIcon("nav-toggle toggle");
    } else setIcon("nav-toggle");
  };
  return (
    <NavbarNav>
      <div className="menuIcon">
        <ul className={active}>
          <li>
            <NavLink className="navbar-link" target={'_parent'} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" target={'_parent'} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" target={'_parent'} to="/icons">
              icons
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" target={'_parent'} to="/service">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" target={'_parent'} to="/stories">
              Stories
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" target={'_parent'} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div>
      </div>
    </NavbarNav>
  );
};

export default Navbar;