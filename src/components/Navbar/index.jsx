import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const [activePage, setActivePage] = useState("");
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [previousScroll, setPreviousScroll] = useState(0);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isScrolledDown = currentScrollPos > previousScroll;

    // Check the scroll direction
    if (isScrolledDown && currentScrollPos > 200) {
      setIsNavVisible(false);
    } else {
      setIsNavVisible(true);
    }

    setPreviousScroll(currentScrollPos);
  };

  useEffect(() => {
    setPreviousScroll(window.scrollY);
  }, []);

  useEffect(() => {
    const pathname = location.pathname;
    setActivePage(pathname);

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location, isNavVisible, previousScroll]);

  return (
    <nav className={`nav ${isNavVisible ? "nav_visible" : "nav_hidden"}`}>
      <div className="nav_icons">
        <div className="nav_logo">
          <Link to="/" className="link">
            <p className="nav_logo_p">
              <span>F</span>
              <span className="logo_color">O</span>
              <span className="logo_color">O</span>
              <span>D</span>
            </p>
          </Link>
        </div>

        <div className="nav_icon" onClick={toggleNav}>
          {isNavOpen ? (
            <i className="bx bx-x"></i>
          ) : (
            <i className="bx bx-menu"></i>
          )}
        </div>
      </div>

      <ul className={`nav_links ${isNavOpen ? "nav_links_open" : ""}`}>
        <Link to="/about" className="link">
          {" "}
          <li
            className={`nav_links_li ${
              activePage === "/about" ? "active" : ""
            }`}
          >
            About
          </li>
        </Link>

        <Link to="/create" className="link">
          {" "}
          <li
            className={`nav_links_li ${
              activePage === "/create" ? "active" : ""
            }`}
          >
            Create
          </li>
        </Link>

        <Link to="/contact" className="link">
          <li
            className={`nav_links_li ${
              activePage === "/contact" ? "active" : ""
            }`}
          >
            Contact
          </li>
        </Link>

        <Link to="/sign-in" className="link ">
          <li
            className={`nav_links_li button ${
              activePage === "/sign-in" ? "active" : ""
            }`}
          >
            Sign in <i className="bx bx-right-arrow-alt"></i>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
