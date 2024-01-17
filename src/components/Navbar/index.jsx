import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { supabase } from "../../lib/helper/supabaseClient";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const [activePage, setActivePage] = useState("");
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [previousScroll, setPreviousScroll] = useState(0);
  const [user, setUser] = useState(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const logout = async () => {
    await supabase.auth.signOut();
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

  // useEffect(() => {
  //   const session = supabase.auth.getSession();
  //   setUser(session?.user);
  //   const { data: authListener } = supabase.auth.onAuthStateChange(
  //     (event, session) => {
  //       switch (event) {
  //         case "SIGNED_IN":
  //           setUser(session?.user);
  //           break;
  //         case "SIGNED_OUT":
  //           setUser(null);
  //           break;
  //         default:
  //       }
  //     }
  //   );
  //   return () => {
  //     authListener.unsubscribe();
  //   };
  // }, []);

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

        {/* <div className="nav_icon" onClick={toggleNav}>
          {isNavOpen ? (
            <i className="bx bx-x"></i>
          ) : (
            <i className="bx bx-menu"></i>
          )}
        </div> */}

        <div className="nav_icon">
          <input
            type="checkbox"
            id="checkbox"
            checked={isNavOpen}
            onChange={toggleNav}
          />
          <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>
        </div>
      </div>

      <ul className={`nav_links ${isNavOpen ? "nav_links_open" : ""}`}>
        <Link to="/" className="link">
          {" "}
          <li className={`nav_links_li ${activePage === "/" ? "active" : ""}`}>
            Home
          </li>
        </Link>

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

        {user ? (
          <button onClick={logout} className="nav_links_li button">
            Logout
          </button>
        ) : (
          <Link to="/sign-in" className="link ">
            <li
              className={`nav_links_li button ${
                activePage === "/sign-in" ? "active" : ""
              }`}
            >
              Sign in <i className="bx bx-right-arrow-alt"></i>
            </li>
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
