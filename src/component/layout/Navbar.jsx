import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaDribbble,
  FaLinkedinIn,
  FaInstagram,
  FaBehance,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      {/* TOP NAV */}
      <div className="top-nav">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <a href="mailto:example@mail.com" className="top-email">
                <FaEnvelope /> <b>Email us at :</b> example@mail.com
              </a>
            </div>

            <div className="col-md-6 topright_nav">
              <ul>
                <li><a href="#"><FaFacebookF /></a></li>
                <li><a href="#"><FaDribbble /></a></li>
                <li><a href="#"><FaLinkedinIn /></a></li>
                <li><a href="#"><FaInstagram /></a></li>
                <li><a href="#"><FaBehance /></a></li>
              </ul>

              <a href="tel:1234567890" className="topnav-call">
                <FaPhoneAlt /> 123-456-7890
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-3">
            <NavLink to="/">
              <img src="/img/top-logo.png" alt="Logo" />
            </NavLink>
          </div>

          <div className="col-9 text-end">
            <span className="open-menu" onClick={() => setMenuOpen(true)}>
              <FiMenu />
            </span>

            <ul className={`nav-content ${menuOpen ? "active" : ""}`}>
              <li className="close" onClick={closeMenu}>
                <IoMdClose />
              </li>

              <li><NavLink to="/projects" onClick={closeMenu}>Projects</NavLink></li>
              <li><NavLink to="/communities" onClick={closeMenu}>Communities</NavLink></li>
              <li><NavLink to="/blogs" onClick={closeMenu}>Blogs</NavLink></li>
              <li><NavLink to="/developers" onClick={closeMenu}>Developers</NavLink></li>
              <li><NavLink to="/explore" onClick={closeMenu}>Explore</NavLink></li>

              <li className="en-btn">
                <NavLink to="/enquire" onClick={closeMenu}>
                  Enquire Now
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
