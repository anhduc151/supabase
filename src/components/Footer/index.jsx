import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_box">
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
        <p className="footer_p">Anywhere, anytime, enjoy your shopping time </p>
      </div>

      <div className="footer_box">
        <h4 className="footer_box_h4">Information</h4>
        <p className="footer_p">About Us</p>
        <p className="footer_p">Event</p>
        <p className="footer_p">More search</p>
      </div>

      <div className="footer_box">
        <h4 className="footer_box_h4">Helpful Links</h4>
        <p className="footer_p">Services</p>
        <p className="footer_p">Support</p>
        <p className="footer_p">Term & Condition</p>
      </div>

      <div className="footer_box">
        <h4 className="footer_box_h4">Our Menu</h4>
        <p className="footer_p">Driver</p>
        <p className="footer_p">Catalog</p>
        <p className="footer_p">Launch</p>
      </div>
    </div>
  );
};

export default Footer;
