import { React, useEffect } from "react";
import "../CountdownCart/Countdown.scss";
import { BiChevronRight } from "react-icons/bi";
import play_store from "../../../Assets/play-store.png";
import apple_store from "../../../Assets/apple-store.png";
import app_screen from "../../../Assets/app-screen.png";
import AOS from "aos";
import "aos/dist/aos.css";
const CountdownCart = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id="countdown">
      <div className="container">
        <div className="row g-3">
          <div className="col-lg-6">
            <div className="cart_left" data-aos="fade-right">
              <div className="boxall">
                <div className="boxin">
                  <div className="box1">34</div>
                  Days
                </div>
                <div className="boxin">
                  <div className="box1">47</div>
                  Hours
                </div>
                <div className="boxin">
                  <div className="box1">55</div>
                  Minutes
                </div>
                <div className="boxin">
                  <div className="box1">60</div>
                  Second
                </div>
              </div>
              <h2>WOO! Flash Sale</h2>
              <a href="#">
                Shop now <BiChevronRight style={{ fontSize: "22px" }} />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cart_right" data-aos="fade-left">
              <p>MOBILE APP VERSION</p>
              <h2>Get OurMobile App It’s Make easy for you life !</h2>
              <div className="img">
                <img src={play_store} alt="" />
                <img src={apple_store} alt="" />
              </div>
              <img id="screen" src={app_screen} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownCart;
