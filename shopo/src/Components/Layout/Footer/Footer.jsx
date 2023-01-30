import React from "react";
import "../Footer/Footer.scss";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaSnapchatGhost } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
const Footer = () => {
  return (
    <footer id="foot">
      <div className="downside">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h3 id="about_us">About Us</h3>
              <p id="text_about">
                We know there are a lot of threa developers our but we pride
                into a firm in the industry.
              </p>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-3 col-6 col-sm-6">
                  <p>Social</p>
                  <ul>
                    <li>
                      <BsFacebook />
                      <a href="#">Facebook</a>
                    </li>
                    <li>
                      <BsTwitter />
                      <a href="#">Twitter</a>
                    </li>
                    <li>
                      <BsYoutube />
                      <a href="#">Youtube</a>
                    </li>
                    <li>
                      <FaSnapchatGhost />
                      <a href="#">Snapchat</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-6 col-sm-6">
                  <p>About</p>
                  <ul>
                    <li>
                      <a href="#">Style Guide</a>
                    </li>
                    <li>
                      <a href="#">Features </a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">404 </a>
                    </li>
                    <li>
                      <a href="#">Get Theme</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-6 col-sm-6">
                  <p>Features</p>
                  <ul>
                    <li>
                      <a href="#">Demos </a>
                    </li>
                    <li>
                      <a href="#">Light version</a>
                    </li>
                    <li>
                      <a href="#">Color version</a>
                    </li>
                    <li>
                      <a href="#">Partial version</a>
                    </li>
                    <li>
                      <a href="#">Dark version</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-6 col-sm-6">
                  <p>Membership</p>
                  <ul>
                    <li>
                      <a href="#">Account</a>
                    </li>
                    <li>
                      <a href="#">Membership</a>
                    </li>
                    <li>
                      <a href="#">Subscribe</a>
                    </li>
                    <li>
                      <a href="#">Tags</a>
                    </li>
                    <li>
                      <a href="#">Authors</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <p id="last_p">©2022Quomodosoft All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
