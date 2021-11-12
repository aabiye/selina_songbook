import React from "react";
import logo from "../assets/logo.png";
import "../App.css";

function Footer() {
  return (
    <div className="footer">
      <footer className="footer">
        <div className="footer-left">
          <div className="footer-item">
            <h4>SELINAS PRODUCTION</h4>
            <ul role="list">
              <li>
                <span> Corpus Christi, TX </span>
              </li>
              <li>
                <a href="#"> info@selina.com</a>
              </li>
              <li>
                <p> 1 (361) 289-9013</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-center">
          <div className="footer-item">
            <h4>SONGS</h4>
            <ul role="list">
              <li>
                <a href="/member">Songs</a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h4>ABOUT</h4>
            <ul role="list">
              <li>
                <a href="/about">Biography</a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h4>CONTACT</h4>
            <ul role="list">
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-item">
            <span>
              <img className="logo2" src={logo} />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
