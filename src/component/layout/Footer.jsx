import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">

          {/* About */}
          <div className="col-md-4 footer-col">
            <h4>About Company</h4>
            <p>
              We provide premium real estate solutions with modern design,
              expert guidance, and trusted services worldwide.
            </p>
            <div className="footer-social">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaTwitter /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Properties</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-2 footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Buy Property</a></li>
              <li><a href="#">Sell Property</a></li>
              <li><a href="#">Rent Property</a></li>
              <li><a href="#">Consulting</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 footer-col">
            <h4>Contact Info</h4>
            <ul className="footer-contact">
              <li><FaMapMarkerAlt /> Dubai, UAE</li>
              <li><FaPhoneAlt /> +91 12345 67890</li>
              <li><FaEnvelope /> info@example.com</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2026 Your Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
